set serveroutput on
set echo on
set feedback on
spool Task2_OutPut.lst

/* ======================
Name - Hay Munn Hnin Wai 
UOW ID - 6573277 
Assignment 2 - Task 2
==========================*/

Create or Replace Trigger BI_VerifyTrip  
BEFORE INSERT ON TRIP 
REFERENCING OLD AS old_values NEW As new_values 
FOR EACH ROW 

DECLARE 
      v_user VARCHAR2(20); 
      v_date VARCHAR2(20);

      TLNum TRIP.L#%TYPE; 
                      
BEGIN  
    SELECT user, to_char(SYSDATE,'DD-MM-YYYY HH24:MI:SS') INTO v_user, v_date from dual; 

    If INSERTING THEN 
    	DBMS_OUTPUT.PUT_LINE(SQL%ROWCOUNT || ' ROW HAS BEEN INSERTED BY User' || v_user ||' ' || 'ON' || v_date); 
    	DBMS_OUTPUT.PUT_LINE('You Have inserted a new Trip Made By Driver:' || ' (T#: ' || :new_values.T# ||'  ,L#: ' || :new_values.L# 
                        || ' ,Reg#:' || :new_values.REG# || ' ,Trip_Date:' || :new_values.TRIP_DATE || ')' );

   --Get the Count(Trip) everytime User Inserted a new Data 
    select count(trip.l#) + 1
    INTO TLNUM 
    from Trip 
    where trip.l# = :new_values.l# 
    group by trip.l#;  
   
    Update Driver 
    Set TOTALTRIPMADE = TLNUM 
    Where Driver.L# = :new_values.l#; 

    DBMS_OUTPUT.PUT_LINE('Total Nos of Trip Made By this Driver '|| :new_values.l# || ' is: ' || TLNUM);   
  
END If; 
    EXCEPTION 
    WHEN OTHERS THEN 
    raise_application_error(-20001,'An error was encountered - ' || SQLCODE || '-ERROR-' || SQLERRM); 

END BI_VerifyTrip; 
/ 
show errors        
       

 -- Try to Insert a new data to the "TRIP Table" for Testing the Trigger 
INSERT INTO TRIP VALUES(109, 10001, 'PKR768', sysdate-(0.6*90));
INSERT INTO TRIP VALUES (110, 10001, 'KKK007', sysdate); 
 
INSERT INTO TRIP VALUES (111, 10002, 'KKK007', sysdate-4); 

INSERT INTO TRIP VALUES(116, 10003, 'SST005', sysdate-28 );

INSERT INTO TRIP VALUES(113, 20002, 'PKR008', sysdate-20 );

INSERT INTO TRIP VALUES(114, 30005, 'PKR008', sysdate-25 );

INSERT INTO TRIP VALUES(112, 20005, 'PKR008', sysdate-15 );


--Check the Nos of TRIP_MADE By Driver (By Joining "TRIP" & "Driver" Table)  
select trip.l#,count(trip.l#) 
from trip 
left join driver on trip.l# = driver.l# 
group by trip.l# 
order by trip.l#; 


--Display the Updated TOTAL_TRIP_MADE Result in "Driver" Table 
Select * from Driver; 


COMMIT;
set echo off
set feedback off
spool off 




	
