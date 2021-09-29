set echo on
set line 132
spool A1T2aEgOutput.txt

-- explain plan before the creatiion of the Index 
explain plan for 
select o_clerk,o_totalprice
from orders 
where o_clerk = 'Some one'
and o_orderstatus = 'P'
and o_totalprice = 10000; 

-- Display Plan 1
select * from table(dbms_xplan.display);

--Select statement that perform Vertical Traversal of the index and read data from data file 
-- explain plan
explain plan for 
select * 
from orders
where o_clerk = 'Some one'
and o_orderstatus = 'P'
and o_totalprice = 10000;

-- Display the plan 2
select * from table (dbms_xplan.display); 

-- Select statement that perform Vertical & followed by Horizontal Travel at the leave Level 
explain plan for 
select o_clerk,o_totalprice 
from orders
where o_clerk = 'Some one'
and o_totalprice > 10000;

-- Display plan 3 
select * from table (dbms_xplan.display); 

----------------------------------------------
-- Create the Index 
----------------------------------------------
create index A1T2aIdx on ORDERS (o_clerk,o_orderstatus,o_totalprice) ; 

-- select statement that perform Vertical Traversal of the index and does not read the data file 
-- explain plan
explain plan for 
select o_clerk,o_totalprice
from orders 
where o_clerk = 'Some one'
and o_orderstatus = 'P'
and o_totalprice = 10000; 

-- Display Plan1 
select * from table(dbms_xplan.display); 

--Select statement that perform vertical Traversal of the index and read data from data file 
-- explain plan
explain plan for 
select * 
from orders
where o_clerk = 'Some one'
and o_orderstatus = 'P'
and o_totalprice = 10000;

-- Display the plan2
select * from table (dbms_xplan.display); 

-- Select statement that perform Vertical & followed by Horizontal Travel at the leave Level 
explain plan for 
select o_clerk,o_totalprice 
from orders
where o_clerk = 'Some one'
and o_totalprice > 10000;

-- Display plan3
select * from table (dbms_xplan.display); 

--Drop the Index
drop index A1T2aIdx;

--
spool off 
