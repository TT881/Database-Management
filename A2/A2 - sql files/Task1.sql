set serveroutput on
set echo on
set feedback on
spool Task1_OutPut.lst

/* ======================
Name - Hay Munn Hnin Wai 
UOW ID - 6573277 
Assignment 2 - Task 1
==========================*/

Create or Replace Procedure EmpMec(eNum IN NUMBER, 
				   eName IN VARCHAR2, 
				   DOB IN DATE, 
				   addr IN VARCHAR2, 
				   hDate IN DATE, 
				   DL#ML# IN NUMBER,      -- Either Driver or Mechanice L#
				   status IN VARCHAR2,
                                   totaltrip IN NUMBER,
                                   expe IN VARCHAR2)  IS 				   

aE# Mechanic.E#%TYPE;
errorNum Number(5);
errorMessage VARCHAR2(200); 

BEGIN 
	INSERT INTO TRKEMPLOYEE VALUES (eNum, eName, TO_DATE(DOB,'DD-MON-YYYY'), addr, hDate);

	--if Experience is Null, then it is "DRIVER"
If expe IS NULL THEN --Driver!!
  BEGIN 
          --Check if the DL# Found in Mechanic Table! 
        SELECT E#
        INTO aE# 
        FROM Mechanic
        Where L# = DL#ML#;   --(If inserted L# is Driver.L#, then display logic error). 
        DBMS_OUTPUT.PUT_LINE('Attempted to Insert this Mechanic as a "DRIVER": Confliction L# is Found In Mechanic Table');
        ROLLBACK;   -- Remove whatever just inserted!
    EXCEPTION  
     WHEN NO_DATA_FOUND THEN 
        INSERT INTO DRIVER VALUES(eNum,DL#ML#,status,totaltrip); 
        COMMIT;  
     WHEN OTHERS THEN  --Whatever error that DBMS detected, then return this error message! 
         errorNum :=  SQLCODE; 
         errorMessage := SQLERRM; 
         DBMS_OUTPUT.PUT_LINE('Error in EmpMec:'); 
	 DBMS_OUTPUT.PUT_LINE(rpad(errorNum,7)|| ';' || errorMessage); 
     ROLLBACK;
  END; 

ELSE --Mechanic!! 
   BEGIN 
	--Check if the ML# found in DriverTable 
        SELECT E#
        INTO aE# 
        FROM Driver
        Where L# = DL#ML#; --(If inserted L# is Mechanic.L#, then display logic error).  
	DBMS_OUTPUT.PUT_LINE('Attempted to Insert this Driver as a "Mechanic": Confliction L# is Found In Driver Table');
        ROLLBACK;   -- Remove whatever just inserted! 
    EXCEPTION  
     WHEN NO_DATA_FOUND THEN 
        INSERT INTO Mechanic VALUES(eNum,DL#ML#,status,expe); 
        COMMIT;  
     WHEN OTHERS THEN  --Whatever error that DBMS detected, then return this error message! 
         errorNum :=  SQLCODE; 
         errorMessage := SQLERRM; 
         DBMS_OUTPUT.PUT_LINE('Error in EmpMec: '); 
	  DBMS_OUTPUT.PUT_LINE(rpad(errorNum,7)|| ';' || errorMessage); 
     ROLLBACK; 
              
   END; 
END IF; 

EXCEPTION 
WHEN OTHERS THEN  --Whatever error that DBMS detected, then return this error message! 
         errorNum :=  SQLCODE; 
         errorMessage := SQLERRM; 
         DBMS_OUTPUT.PUT_LINE('Error in EmpMec:'); 
	  DBMS_OUTPUT.PUT_LINE(rpad(errorNum,7)|| ';' || errorMEssage); 
     ROLLBACK; 
END EmpMec; 
/
show errors;

--Execute Statements 
-- Success! Without Experience (Insert into Driver table) 
Execute EmpMec(16, 'John', '6-SEP-1990', 'BukitPanjang, 403', sysdate-(1.8*365), 12345, 'AVAILABLE', 20, null);
	 
--Error! 
execute EmpMec(17, 'TingTing', '11-May-1985', 'Kinstead Town, KIN20', sysdate-(1.6*365), 12345, 'BUSY', null,'STANDARD');

----
Select * from TRKEMPLOYEE;
Select * from driver;
Select * from mechanic; 
----
spool off


