set echo on 
set line 132
spool A1Q2BOutput.txt 
set feedback on

/*==================================
	Name - Hay Munn Hnin Wai 
  	Student ID - 6573277 
   	Tutorial - T02
   	Assignment 1 - Task(2B) 
=====================================*/ 

-- (2b-i) explain plan before the creation of the Index 
explain plan for 
SELECT distinct o_total, o_orderDate
FROM ORDERS
ORDER BY O_ORDERDATE;

-- Displan Plan (2b-i) 
select * from table(dbms_xplan.display); 

--(2b-ii) explain plan before the creation of the Index 
explain plan for 
SELECT * 
FROM PART 
WHERE P_BRAND = 'GOLDEN BOLTS'
AND P_SIZE = 25; 

-- Displan Plan (2b-ii) 
select * from table(dbms_xplan.display); 

--(2b-iii) explain plan before the creation of the Index 
explain plan for 
SELECT C_CUSTKEY,C_NAME,C_ADDRESS
FROM CUSTOMER;

-- Displan Plan (2b-ii) 
select * from table(dbms_xplan.display); 


--(2b-iv) explain plan before the creation of the Index 
explain plan for 
SELECT L_PARTKEY,count(*) 
FROM LINEITEM
GROUP BY L_PARTKEY
HAVING COUNT(L_TAX) >2;

-- Displan Plan (2b-iv) 
select * from table(dbms_xplan.display);

--(2b-v) explain plan before the creation of the Index 
explain plan for 
SELECT *
FROM LINEITEM
WHERE L_QUANTITY = 100
OR L_SHIPMODE = 'FAST';

-- Displan Plan (2b-v) 
select * from table(dbms_xplan.display);  

/*========================================================
-- Create the Index-1 
===========================================================*/ 
create index A1Q2b1Idx on ORDERS(o_totalprice, o_orderDate); 

-- (2b-i)explain plan after the creation of the Index for Q.2b-i
explain plan for 
SELECT distinct o_totalprice, o_orderDate
FROM ORDERS
ORDER BY O_ORDERDATE;

-- Displan Plan (2b-i) 
select * from table(dbms_xplan.display); 

/*========================================================
-- Create the Index-2 
===========================================================*/ 
create index A1Q2b2Idx on PART(P_BRAND,P_SIZE); 

--(2b-ii) explain plan after the creation of the Index 
explain plan for 
SELECT * 
FROM PART 
WHERE P_BRAND = 'GOLDEN BOLTS'
AND P_SIZE = 25; 

-- Displan Plan (2b-ii) 
select * from table(dbms_xplan.display); 

/*========================================================
-- Create the Index-3
===========================================================*/
create index A1Q2b3Idx on CUSTOMER(c_CUSTKEY,C_NAME , C_ADDRESS);


--(2b-iii) explain plan after the creation of the Index  
explain plan for 
SELECT C_CUSTKEY,C_NAME,C_ADDRESS
FROM CUSTOMER;

-- Displan Plan (2b-iii) 
select * from table(dbms_xplan.display); 


/*========================================================
-- Create the Index-4
===========================================================*/ 
create index A1Q2b4Idx on LINEITEM(L_partkey,L_TAX); 

--(2b-iv) explain plan after the creation of the Index 
explain plan for 
SELECT L_PARTKEY,count(*) 
FROM LINEITEM
GROUP BY L_PARTKEY
HAVING COUNT(L_TAX) >2;

-- Displan Plan (2b-iv) 
select * from table(dbms_xplan.display); 

/*========================================================
-- Create the Index-5
===========================================================*/ 
create index A1Q2b5Idx on LINEITEM (L_QUANTITY,L_SHIPMODE);

--(2b-v) explain plan after the creation of the Index 
explain plan for 
SELECT *
FROM LINEITEM
WHERE L_QUANTITY = 100
OR L_SHIPMODE = 'FAST';

-- Displan Plan (2b-v) 
select * from table(dbms_xplan.display);  


--Drop the Index
drop index A1Q2b1Idx;
drop index A1Q2b2Idx;
drop index A1Q2b3Idx;  
drop index A1Q2b4Idx;  
drop index A1Q2b5Idx; 
---

set echo off
set feedback off
spool off  
