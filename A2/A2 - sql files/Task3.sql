set serveroutput on
set echo on
set feedback on
spool Task3_OutPut.lst

/* ======================
Name - Hay Munn Hnin Wai 
UOW ID - 6573277 
Assignment 2 - Task 3
==========================*/

Create or Replace Function LongTrip(DLNum In Driver.L#%TYPE) 
return varchar2 IS 
   
	result varchar2(500);
        ename varchar2(500); 
        MaxLeg number(2);

BEGIN 
      -- Get The Max(Count(TripLegs))Performed by the driver Base on  userinput 
       SELECT e.name INTO ename
       FROM TRKEMPLOYEE e
       left join driver on e.e# = driver.e# 
       where driver.l# = DLNum;
      
       SELECT max(count(tl.leg#)) INTO MaxLeg 
       from trip t, tripleg tl 
       where t.t# = tl.t# and t.l# = DLNum 
       group by tl.t#; 
    
     IF ( MaxLeg > 0) THEN
        result := 'Driver Name :'  || ename  || ' & '  ||  chr(10)  || 
             'The Longest Trip made by this Driver with L# '  || DLNum   || ' is: ' || MaxLeg;
    ELSE 
        result := 'Driver Name is:'  || ename  || '&'  || chr(10) || 
             'The Longest Trip made by this Driver with L# ' ||  DLNum || ' is: 0';
    END IF;
   
return result; 
END LongTrip; 
/ 
show error 

--Test the LongestTrip for Driver 
select LongTrip(driver.L#) from driver;


set echo off
set feedback off
spool off 





