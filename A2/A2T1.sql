SPOOL solution1.lst
SET ECHO ON
SET FEEDBACK ON
SET LINESIZE 100
SET PAGESIZE 200
SET SERVEROUTPUT ON

/*
Name: Joel Sebastian Leong
Student Id: 6565360
Assignment 2 Task 1
*/

create or replace procedure ei (eNum IN NUMBER, eName VARCHAR, birth DATE, addr VARCHAR, hDate DATE, lNum IN NUMBER, stats VARCHAR, expe VARCHAR)
IS 



BEGIN

	FOR d IN (SELECT E#, L# FROM DRIVER)
	loop
	    IF (enum = d.E# OR lnum = d.L#) THEN
			DBMS_OUTPUT.PUT_LINE('Error record exists in DRIVER table');
			RETURN;
	    END IF;
	END loop;


	FOR m IN (SELECT E#, L# FROM MECHANIC)
	loop
	    IF (eNum = m.E# OR lNum = m.L#) THEN
			DBMS_OUTPUT.PUT_LINE('Error record exists in MECHANIC table');
			RETURN;
	    END IF;
	END loop;

	
	INSERT INTO TRKEMPLOYEE VALUES (eNum, eName, TO_DATE(birth, 'DD-MON-YYYY'), addr, hDate);
	
	IF(expe = 'BEGINNER' OR expe = 'STANDARD' OR expe = 'EXPERT') THEN
			INSERT INTO MECHANIC VALUES (eNum, lNum, stats, expe);			
	ELSE
			INSERT INTO DRIVER VALUES (eNum, lNum, stats, null);			
	END IF;

	--Success
	--execute ei(16, 'James Potter', '11-APR-1995', '45 Victoria St. Hurstville, NSW 2456', sysdate-(1.8*365), 12345, 'AVAILABLE', 'STANDARD');
	
	--Error L# exist
	--execute ei(17, 'David Lee', '11-May-1985', '42 Church St. City, NSW 2300', sysdate-(1.6*365), 12345, 'AVAILABLE', 'STANDARD');
END;
/
show error;

