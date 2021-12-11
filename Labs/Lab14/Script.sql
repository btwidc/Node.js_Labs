create database KKV;
use KKV;

create table FACULTY
(    FACULTY      nvarchar(10) primary key,
     FACULTY_NAME  nvarchar(50) default '???'
);

insert into FACULTY   (FACULTY,   FACULTY_NAME )
            values  
			('ХТиТ',	'Химическая технология и техника'),
			('ЛХФ',     'Лесохозяйственный факультет'),
			('ИЭФ',		'Инженерно-экономический факультет'),
			('ТТЛП',	'Технология и техника лесной промышленности'),
			('ТОВ',		'Технология органических веществ'),
            ('ИТ',		'Факультет информационных технологий'); 

select * from FACULTY;

------------------------------------------------------------------------------

create table  PULPIT 
(   PULPIT		 nvarchar(20)  constraint PULPIT_PK  primary key,
    PULPIT_NAME  nvarchar(100), 
    FACULTY		 nvarchar(10)   constraint PULPIT_FACULTY_FK foreign key references FACULTY(FACULTY) 
);

insert into PULPIT   (PULPIT, PULPIT_NAME, FACULTY )
  values	('ИСиТ', 'Информационных систем и технологий ','ИТ'  ),
			('ПОиСОИ','Полиграфического оборудования и систем обработки ин-формации ', 'ИЭФ'  ),
			('БФ', 'Белорусской филологии','ИЭФ'  ),
			('РИТ', 'Редакционно-издательских тенологий', 'ИЭФ'  ),            
			('ПП', 'Полиграфических производств','ИЭФ'  ),                              
			('ЛВ', 'Лесоводства','ЛХФ'),          
			('ЛУ', 'Лесоустройства','ЛХФ'),           
			('ЛЗиДВ', 'Лесозащиты и древесиноведения','ЛХФ'),                
			('ЛКиП', 'Лесных культур и почвоведения','ЛХФ'), 
			('ТиП', 'Туризма и природопользования','ЛХФ'),              
			('ЛПиСПС','Ландшафтного проектирования и садово-паркового строи-тельства','ЛХФ'),          
			('ТЛ', 'Транспорта леса', 'ТТЛП'),                          
			('ЛМиЛЗ','Лесных машин и технологии лесозаготовок','ТТЛП'),  
			('ТДП','Технологий деревообрабатывающих производств', 'ТТЛП'),   
			('ТиДИД','Технологии и дизайна изделий из древесины','ТТЛП'),    
			('ОХ', 'Органической химии','ТОВ'), 
			('ХПД','Химической переработки древесины','ТОВ'),             
			('ТНВиОХТ','Технологии неорганических веществ и общей химической технологии ','ХТиТ'), 
			('ПиАХП','Процессов и аппаратов химических производств','ХТиТ'),                                               
			('ЭТиМ',    'Экономической теории и маркетинга','ИЭФ'),   
			('МиЭП',   'Менеджмента и экономики природопользования','ИЭФ'),   
			('СБУАиА', 'Статистики, бухгалтерского учета, анализа и аудита', 'ИЭФ')     

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
                       values  ('СМЛВ',    'Смелов Владимир Владиславович',  'ИСиТ');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('АКНВЧ',    'Акунович Станислав Иванович',  'ИСиТ');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('КЛСНВ',    'Колесников Леонид Валерьевич',  'ИСиТ');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('ГРМН',    'Герман Олег Витольдович',  'ИСиТ');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('ЛЩНК',    'Лащенко Анатолий Пвалович',  'ИСиТ');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('БРКВЧ',    'Бракович Андрей Игорьевич',  'ИСиТ');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('ДДК',     'Дедко Александр Аркадьевич',  'ИСиТ');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('КБЛ',     'Кабайло Александр Серафимович',  'ИСиТ');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('УРБ',     'Урбанович Павел Павлович',  'ИСиТ');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('РМНК',     'Романенко Дмитрий Михайлович',  'ИСиТ');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('ПСТВЛВ',  'Пустовалова Наталия Николаевна', 'ИСиТ' );
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('?',     'Неизвестный',  'ИСиТ');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                      values  ('ГРН',     'Гурин Николай Иванович',  'ИСиТ');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('ЖЛК',     'Жиляк Надежда Александровна',  'ИСиТ');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('БРТШВЧ',   'Барташевич Святослав Александрович',  'ПОиСОИ');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('ЮДНКВ',   'Юденков Виктор Степанович',  'ПОиСОИ');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('БРНВСК',   'Барановский Станислав Иванович',  'ЭТиМ');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('НВРВ',   'Неверов Александр Васильевич',  'МиЭП');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('РВКЧ',   'Ровкач Андрей Иванович',  'ОВ');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('ДМДК', 'Демидко Марина Николаевна',  'ЛПиСПС');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('МШКВСК',   'Машковский Владимир Петрович',  'ЛУ');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('ЛБХ',   'Лабоха Константин Валентинович',  'ЛВ');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('ЗВГЦВ',   'Звягинцев Вячеслав Борисович',  'ЛЗиДВ'); 
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('БЗБРДВ',   'Безбородов Владимир Степанович',  'ОХ'); 
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('ПРКПЧК',   'Прокопчук Николай Романович',  'ТНХСиППМ'); 
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('НСКВЦ',   'Насковец Михаил Трофимович',  'ТЛ'); 
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('МХВ',   'Мохов Сергей Петрович',  'ЛМиЛЗ'); 
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('ЕЩНК',   'Ещенко Людмила Семеновна',  'ТНВиОХТ'); 
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('ЖРСК',   'Жарский Иван Михайлович',  'ХТЭПиМЭЕ'); 

select * from TEACHER;
-----------------------------------------------------------------------------------------------					   

create table SUBJECT
(    
	SUBJECT  nvarchar(10) constraint SUBJECT_PK  primary key, 
	SUBJECT_NAME nvarchar(100) unique,
	PULPIT  nvarchar(20) constraint SUBJECT_PULPIT_FK foreign key references PULPIT(PULPIT)   
);

 insert into SUBJECT   (SUBJECT,   SUBJECT_NAME, PULPIT )
	values ('СУБД',   'Системы управления базами данных', 'ИСиТ'),
			('БД',     'Базы данных','ИСиТ'),
			('ИНФ',    'Информационные технологии','ИСиТ'),
			('ОАиП',  'Основы алгоритмизации и программирования', 'ИСиТ'),
			('ПЗ',     'Представление знаний в компьютерных системах', 'ИСиТ'),
			('ПСП',    'Программирование сетевых приложений', 'ИСиТ'),
			('МСОИ',  'Моделирование систем обработки информации', 'ИСиТ'),
			('ПИС',     'Проектирование информационных систем', 'ИСиТ'),
			('КГ',      'Компьютерная геометрия ','ИСиТ'),
			('ПМАПЛ',   'Полиграф. машины, автоматы и поточные линии', 'ПОиСОИ'),
			('КМС',     'Компьютерные мультимедийные системы', 'ИСиТ'),
			('ОПП',     'Организация полиграф. производства', 'ПОиСОИ'),
			('ДМ',   'Дискретная математика', 'ИСиТ'),
			('МП',   'Математическое программирование','ИСиТ'),
			('ЛЭВМ', 'Логические основы ЭВМ',  'ИСиТ'),
			('ООП',  'Объектно-ориентированное программирование', 'ИСиТ'),
			('ЭП', 'Экономика природопользования','МиЭП'),
			('ЭТ', 'Экономическая теория','ЭТиМ'),
			('БЛЗиПсOO','Биология лесных зверей и птиц с осн. охотов.','ЛВ'),
			('ОСПиЛПХ','Основы садово-паркового и лесопаркового хозяй-ства',  'ЛПиСПС'),
			('ИГ', 'Инженерная геодезия ','ЛВ'),
			('ЛВ',    'Лесоводство', 'ЛЗиДВ'),
			('ОХ',    'Органическая химия', 'ОХ'),
			('ТРИ',    'Технология резиновых изделий','ЛЗиДВ'),
			('ВТЛ',    'Водный транспорт леса','ТЛ'),
			('ТиОЛ',   'Технология и оборудование лесозаготовок', 'ЛЗиДВ')
			
select * from SUBJECT;

----------------------------------------------------------------------------------------

create table AUDITORIUMS_TYPE
(
    AUDITORIUM_TYPE  nvarchar(10) constraint AUDITORIUM_TYPE_PK  primary key,
    AUDITORIUM_TYPENAME  nvarchar(30)
 )
insert into AUDITORIUMS_TYPE   (AUDITORIUM_TYPE,  AUDITORIUM_TYPENAME )        values ('ЛК',            'Лекционная');
insert into AUDITORIUMS_TYPE   (AUDITORIUM_TYPE,  AUDITORIUM_TYPENAME )         values ('ЛБ-К',          'Компьютерный класс');
insert into AUDITORIUMS_TYPE   (AUDITORIUM_TYPE, AUDITORIUM_TYPENAME )         values ('ЛК-К',          'Лекционная с уст. проектором');
insert into AUDITORIUMS_TYPE   (AUDITORIUM_TYPE,  AUDITORIUM_TYPENAME )          values  ('ЛБ-X',          'Химическая лаборатория');
insert into AUDITORIUMS_TYPE   (AUDITORIUM_TYPE, AUDITORIUM_TYPENAME )        values  ('ЛБ-СК',   'Спец. компьютерный класс');

select * from AUDITORIUMS_TYPE;

-------------------------------------------------------------------------------------

create table AUDITORIUM
(   AUDITORIUM   nvarchar(20)  constraint AUDITORIUM_PK  primary key,
    AUDITORIUM_TYPE     nvarchar(10) constraint  AUDITORIUM_AUDITORIUM_TYPE_FK foreign key
                      references AUDITORIUMS_TYPE(AUDITORIUM_TYPE),
   AUDITORIUM_CAPACITY  integer constraint  AUDITORIUM_CAPACITY_CHECK default 1  check (AUDITORIUM_CAPACITY between 1 and 300),  -- вместимость
   AUDITORIUM_NAME      nvarchar(50)
);

insert into  AUDITORIUM   (AUDITORIUM, AUDITORIUM_NAME, AUDITORIUM_TYPE, AUDITORIUM_CAPACITY) values  ('206-1', '206-1',   'ЛБ-К', 15);
insert into  AUDITORIUM   (AUDITORIUM, AUDITORIUM_NAME, AUDITORIUM_TYPE, AUDITORIUM_CAPACITY) values  ('301-1',   '301-1', 'ЛБ-К', 15);
insert into  AUDITORIUM   (AUDITORIUM, AUDITORIUM_NAME, AUDITORIUM_TYPE, AUDITORIUM_CAPACITY) values  ('236-1',   '236-1', 'ЛК',   60);
insert into  AUDITORIUM   (AUDITORIUM, AUDITORIUM_NAME, AUDITORIUM_TYPE, AUDITORIUM_CAPACITY) values  ('313-1',   '313-1', 'ЛК-К',   60);
insert into  AUDITORIUM   (AUDITORIUM, AUDITORIUM_NAME, AUDITORIUM_TYPE, AUDITORIUM_CAPACITY) values  ('324-1',   '324-1', 'ЛК-К',   50);
insert into  AUDITORIUM   (AUDITORIUM, AUDITORIUM_NAME, AUDITORIUM_TYPE, AUDITORIUM_CAPACITY) values  ('413-1',   '413-1', 'ЛБ-К', 15);
insert into  AUDITORIUM   (AUDITORIUM, AUDITORIUM_NAME, AUDITORIUM_TYPE, AUDITORIUM_CAPACITY) values  ('423-1',   '423-1', 'ЛБ-К', 90);
insert into  AUDITORIUM   (AUDITORIUM, AUDITORIUM_NAME, AUDITORIUM_TYPE, AUDITORIUM_CAPACITY) values  ('408-2',   '408-2', 'ЛК',  90);

select * from AUDITORIUM;

--------------------------------------

DROP table AUDITORIUM;
DROP table AUDITORIUMS_TYPE;
DROP table SUBJECT;
DROP table PULPIT;
DROP table FACULTY;