create database KKV;
use KKV;

create table FACULTY
(    FACULTY      nvarchar(10) primary key,
     FACULTY_NAME  nvarchar(50) default '???'
);

insert into FACULTY   (FACULTY,   FACULTY_NAME )
            values  
			('����',	'���������� ���������� � �������'),
			('���',     '����������������� ���������'),
			('���',		'���������-������������� ���������'),
			('����',	'���������� � ������� ������ ��������������'),
			('���',		'���������� ������������ �������'),
            ('��',		'��������� �������������� ����������'); 

select * from FACULTY;

------------------------------------------------------------------------------

create table  PULPIT 
(   PULPIT		 nvarchar(20)  constraint PULPIT_PK  primary key,
    PULPIT_NAME  nvarchar(100), 
    FACULTY		 nvarchar(10)   constraint PULPIT_FACULTY_FK foreign key references FACULTY(FACULTY) 
);

insert into PULPIT   (PULPIT, PULPIT_NAME, FACULTY )
  values	('����', '�������������� ������ � ���������� ','��'  ),
			('������','���������������� ������������ � ������ ��������� ��-�������� ', '���'  ),
			('��', '����������� ���������','���'  ),
			('���', '�����������-������������ ���������', '���'  ),            
			('��', '��������������� �����������','���'  ),                              
			('��', '�����������','���'),          
			('��', '��������������','���'),           
			('�����', '���������� � ����������������','���'),                
			('����', '������ ������� � ������������','���'), 
			('���', '������� � ������������������','���'),              
			('������','������������ �������������� � ������-��������� �����-��������','���'),          
			('��', '���������� ����', '����'),                          
			('�����','������ ����� � ���������� �������������','����'),  
			('���','���������� �������������������� �����������', '����'),   
			('�����','���������� � ������� ������� �� ���������','����'),    
			('��', '������������ �����','���'), 
			('���','���������� ����������� ���������','���'),             
			('�������','���������� �������������� ������� � ����� ���������� ���������� ','����'), 
			('�����','��������� � ��������� ���������� �����������','����'),                                               
			('����',    '������������� ������ � ����������','���'),   
			('����',   '����������� � ��������� ������������������','���'),   
			('������', '����������, �������������� �����, ������� � ������', '���')     

select * from PULPIT;

----------------------------------------------------------------------------------------

CREATE TABLE TEACHER
 ( 
  TEACHER       nvarchar(20) NOT  NULL,
  TEACHER_NAME  nvarchar(50), 
  PULPIT        nvarchar(20) NOT NULL, 
  CONSTRAINT PK_TEACHER  PRIMARY KEY(TEACHER), 
  CONSTRAINT FK_TEACHER_PULPIT FOREIGN   KEY(PULPIT)   REFERENCES PULPIT(PULPIT)
 ) ;
 
 
delete  TEACHER;
insert into  TEACHER    (TEACHER,   TEACHER_NAME, PULPIT )
                       values  ('����',    '������ �������� �������������',  '����');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('�����',    '�������� ��������� ��������',  '����');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('�����',    '���������� ������ ����������',  '����');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('����',    '������ ���� �����������',  '����');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('����',    '������� �������� ��������',  '����');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('�����',    '�������� ������ ���������',  '����');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('���',     '����� ��������� ����������',  '����');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('���',     '������� ��������� �����������',  '����');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('���',     '��������� ����� ��������',  '����');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('����',     '��������� ������� ����������',  '����');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('������',  '����������� ������� ����������', '����' );
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('?',     '�����������',  '����');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                      values  ('���',     '����� ������� ��������',  '����');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('���',     '����� ������� �������������',  '����');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('������',   '���������� ��������� �������������',  '������');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('�����',   '������� ������ ����������',  '������');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('������',   '����������� ��������� ��������',  '����');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('����',   '������� ��������� ����������',  '����');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('����',   '������ ������ ��������',  '��');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('����', '������� ������ ����������',  '������');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('������',   '���������� �������� ��������',  '��');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('���',   '������ ���������� ������������',  '��');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('�����',   '��������� �������� ���������',  '�����'); 
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('������',   '���������� �������� ����������',  '��'); 
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('������',   '��������� ������� ���������',  '��������'); 
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('�����',   '�������� ������ ����������',  '��'); 
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('���',   '����� ������ ��������',  '�����'); 
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('����',   '������ ������� ���������',  '�������'); 
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('����',   '������� ���� ����������',  '��������'); 

select * from TEACHER;
-----------------------------------------------------------------------------------------------					   

create table SUBJECT
(    
	SUBJECT  nvarchar(10) constraint SUBJECT_PK  primary key, 
	SUBJECT_NAME nvarchar(100) unique,
	PULPIT  nvarchar(20) constraint SUBJECT_PULPIT_FK foreign key references PULPIT(PULPIT)   
);

 insert into SUBJECT   (SUBJECT,   SUBJECT_NAME, PULPIT )
	values ('����',   '������� ���������� ������ ������', '����'),
			('��',     '���� ������','����'),
			('���',    '�������������� ����������','����'),
			('����',  '������ �������������� � ����������������', '����'),
			('��',     '������������� ������ � ������������ ��������', '����'),
			('���',    '���������������� ������� ����������', '����'),
			('����',  '������������� ������ ��������� ����������', '����'),
			('���',     '�������������� �������������� ������', '����'),
			('��',      '������������ ��������� ','����'),
			('�����',   '��������. ������, �������� � �������� �����', '������'),
			('���',     '������������ �������������� �������', '����'),
			('���',     '����������� ��������. ������������', '������'),
			('��',   '���������� ����������', '����'),
			('��',   '�������������� ����������������','����'),
			('����', '���������� ������ ���',  '����'),
			('���',  '��������-��������������� ����������������', '����'),
			('��', '��������� ������������������','����'),
			('��', '������������� ������','����'),
			('������OO','�������� ������ ������ � ���� � ���. ������.','��'),
			('�������','������ ������-��������� � ������������� �����-����',  '������'),
			('��', '���������� �������� ','��'),
			('��',    '�����������', '�����'),
			('��',    '������������ �����', '��'),
			('���',    '���������� ��������� �������','�����'),
			('���',    '������ ��������� ����','��'),
			('����',   '���������� � ������������ �������������', '�����')
			
select * from SUBJECT;

----------------------------------------------------------------------------------------

create table AUDITORIUMS_TYPE
(
    AUDITORIUM_TYPE  nvarchar(10) constraint AUDITORIUM_TYPE_PK  primary key,
    AUDITORIUM_TYPENAME  nvarchar(30)
 )
insert into AUDITORIUMS_TYPE   (AUDITORIUM_TYPE,  AUDITORIUM_TYPENAME )        values ('��',            '����������');
insert into AUDITORIUMS_TYPE   (AUDITORIUM_TYPE,  AUDITORIUM_TYPENAME )         values ('��-�',          '������������ �����');
insert into AUDITORIUMS_TYPE   (AUDITORIUM_TYPE, AUDITORIUM_TYPENAME )         values ('��-�',          '���������� � ���. ����������');
insert into AUDITORIUMS_TYPE   (AUDITORIUM_TYPE,  AUDITORIUM_TYPENAME )          values  ('��-X',          '���������� �����������');
insert into AUDITORIUMS_TYPE   (AUDITORIUM_TYPE, AUDITORIUM_TYPENAME )        values  ('��-��',   '����. ������������ �����');

select * from AUDITORIUMS_TYPE;

-------------------------------------------------------------------------------------

create table AUDITORIUM
(   AUDITORIUM   nvarchar(20)  constraint AUDITORIUM_PK  primary key,
    AUDITORIUM_TYPE     nvarchar(10) constraint  AUDITORIUM_AUDITORIUM_TYPE_FK foreign key
                      references AUDITORIUMS_TYPE(AUDITORIUM_TYPE),
   AUDITORIUM_CAPACITY  integer constraint  AUDITORIUM_CAPACITY_CHECK default 1  check (AUDITORIUM_CAPACITY between 1 and 300),  -- �����������
   AUDITORIUM_NAME      nvarchar(50)
);

insert into  AUDITORIUM   (AUDITORIUM, AUDITORIUM_NAME, AUDITORIUM_TYPE, AUDITORIUM_CAPACITY) values  ('206-1', '206-1',   '��-�', 15);
insert into  AUDITORIUM   (AUDITORIUM, AUDITORIUM_NAME, AUDITORIUM_TYPE, AUDITORIUM_CAPACITY) values  ('301-1',   '301-1', '��-�', 15);
insert into  AUDITORIUM   (AUDITORIUM, AUDITORIUM_NAME, AUDITORIUM_TYPE, AUDITORIUM_CAPACITY) values  ('236-1',   '236-1', '��',   60);
insert into  AUDITORIUM   (AUDITORIUM, AUDITORIUM_NAME, AUDITORIUM_TYPE, AUDITORIUM_CAPACITY) values  ('313-1',   '313-1', '��-�',   60);
insert into  AUDITORIUM   (AUDITORIUM, AUDITORIUM_NAME, AUDITORIUM_TYPE, AUDITORIUM_CAPACITY) values  ('324-1',   '324-1', '��-�',   50);
insert into  AUDITORIUM   (AUDITORIUM, AUDITORIUM_NAME, AUDITORIUM_TYPE, AUDITORIUM_CAPACITY) values  ('413-1',   '413-1', '��-�', 15);
insert into  AUDITORIUM   (AUDITORIUM, AUDITORIUM_NAME, AUDITORIUM_TYPE, AUDITORIUM_CAPACITY) values  ('423-1',   '423-1', '��-�', 90);
insert into  AUDITORIUM   (AUDITORIUM, AUDITORIUM_NAME, AUDITORIUM_TYPE, AUDITORIUM_CAPACITY) values  ('408-2',   '408-2', '��',  90);

select * from AUDITORIUM;

--------------------------------------

DROP table AUDITORIUM;
DROP table AUDITORIUMS_TYPE;
DROP table SUBJECT;
DROP table PULPIT;
DROP table FACULTY;