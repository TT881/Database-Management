set echo on 
set line 132
spool A1Q2aOutput.txt 
set feedback on

/*==================================
	Name - Hay Munn Hnin Wai 
  	Student ID - 6573277 
   	Tutorial - T02
   	Assignment 1 - Task(2a) 
=====================================*/ 

-- (2a-i) explain plan before the creation of the Index that perform Vertal-Traversal and not access a relational table. 
explain plan for 
SELECT COUNT(*) 
FROM PART
WHERE p_partkey = '##########' ; 

-- Displan Plan (2a-i) 
select * from table(dbms_xplan.display); 
----------------------------------------------------------------------------------------------------------------------------------
-- (ii)explain plan before the creation of the Index that perform VERTICAL-Traversal and Horizontally Without access a relational table. 
explain plan for 
SELECT COUNT(*) 
FROM PART
WHERE p_partkey > '#########' ; 

-- Displan Plan (2a-ii) 
select * from table(dbms_xplan.display); 


----------------------------------------------------------------------------------------------------------------------------------
-- (iii)explain plan before the creation of the Index that perform HORIZONTALLY Traversal Without access a relational table. 
explain plan for 
SELECT p_partkey  
FROM PART; 

-- Displan Plan (2a-iii) 
select * from table(dbms_xplan.display); 


----------------------------------------------------------------------------------------------------------------------------------
-- (iv)explain plan before the creation of the Index that perform VERTICALLY and Access the relational table. 
explain plan for 
SELECT *
FROM PART
WHERE p_partkey = '#####'
AND p_type = 'SMALL BRUSHED BRASS'	
AND p_retailprice = 1247.28; 

-- Displan Plan (2a-iv) 
select * from table(dbms_xplan.display);

----------------------------------------------------------------------------------------------------------------------------------
-- (v)explain plan before the creation of the Index that perform VERTICALLY & HORIZONTALLY and Access the relational table. 
explain plan for 
SELECT *
FROM PART 
WHERE p_retailprice > 5000;

-- Displan Plan (2a-v) 
select * from table(dbms_xplan.display);

/*========================================================
-- Create the Index
===========================================================*/ 
create index A1Q2aIdx on PART(p_name,p_type,p_retailprice); 

-- (2a-i) select statement that perform Vertal-Traversal and not access a relational table after create the Index  
--explain plan 
explain plan for 
SELECT COUNT(*) 
FROM PART
WHERE p_partkey = '##########' ; 

-- Displan Plan (2a-i)
select * from table(dbms_xplan.display); 

-- (2a-ii) explain plan before the creation of the Index that perform Vertal-Traversal and Horizontally without access a relational table. 
explain plan for 
SELECT COUNT(*) 
FROM PART
WHERE p_partkey > '#########' ; 

-- Displan Plan (2a-ii) 
select * from table(dbms_xplan.display); 

-- (iii)explain plan before the creation of the Index that perform Horzontal Traversal without access a relational table. 
explain plan for 
SELECT p_partkey  
FROM PART; 

-- Displan Plan (2a-iii) 
select * from table(dbms_xplan.display); 

-- (iv)explain plan before the creation of the Index that perform VERTICALLY and Access the relational table. 
explain plan for 
SELECT *
FROM PART
WHERE p_partkey = '#####'
AND p_type = 'SMALL BRUSHED BRASS'	
AND p_retailprice = 1247.28; 

-- Displan Plan (2a-iv) 
select * from table(dbms_xplan.display); 

-- (v)explain plan before the creation of the Index that perform VERTICALLY & HORIZONTALLY and Access the relational table. 
explain plan for 
SELECT *
FROM PART 
WHERE p_retailprice > 5000;

-- Displan Plan (2a-v) 
select * from table(dbms_xplan.display);


--Drop the Index
drop index A1Q2aIdx;
---

set echo off
set feedback off
spool off  


