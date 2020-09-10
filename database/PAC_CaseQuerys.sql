SELECT * FROM PAS_Religion;

INSERT INTO PAS_Religion VALUES
(
'RE01',
'Catolica',
'Religion catolica'
);
SELECT * FROM PAS_Person;

INSERT INTO
    PAS_Person (
        uuid,
        id,
        firstName,
        secondName,
        lastName,
        secondLastName,
        marriedName,
        bornDate,
        uuidReligion,
        uuidRole,
        dateNameUpdated,
        mobilePhone,
        email,
        firstNameFather,
        secondNameFather,
        lastNameFather,
        secondLastNameFather,
        firstNameMother,
        secondNameMother,
        lastNameMother,
        secondLastNameMother,
        firstNameExtra,
        secondNameExtra,
        lastNameExtra,
        secondLastNameExtra,
        active
    )
VALUES
    (
        'PAC_001',
        '001',
        'Augusto',
        'Jose',
        'Pacheco',
        'Martinez',
        NULL,
        '1997/12/17',
        'RE01',
        'role2',
        '2020/08/27',
        '12345678',
		'correo@correo.com',
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        1
    );

INSERT INTO PAS_Role VALUES
(
'role2',
'usuario',
'Permisos de Usuario'
);

SELECT * FROM PAC_Stage;

INSERT INTO PAC_Stage VALUES
(
'stage1',
'Iniciado',
'Fase inicial'
),
(
'stage2',
'Proceso',
'Fase en proceso'
),
(
'stage3',
'Finalizado',
'Fase Finalizada'
),
(
'stage4',
'En Espera',
'Fase sin confirmación'
);

SELECT * FROM PAS_PersonPatient;

INSERT INTO PAS_PersonPatient VALUES
(
'PAC_001',
'1'
);

SELECT * FROM PAC_Case;

SELECT * FROM PAC_Case WHERE uuid = '719d7e58-35a5-4ac3-a18a-ac73575dcbb1' ; 

INSERT INTO PAC_Case VALUES 
(
'001',
'2',
'PAC_001',
'PAC_001',
'PAC_001',
'2020-08-27',
'stage1',
'paco',
'1'
);

SELECT * FROM PAS_PersonUser;

INSERT INTO PAS_PersonUser VALUES
(
'PAC_001',
'JoseAlter',
'sdf456'
);



