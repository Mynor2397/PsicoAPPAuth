DROP PROCEDURE registerperson;
delimiter $ 
CREATE PROCEDURE `registerperson` (
    in _uuidPerson varchar(36),
    in _id varchar(20),
    in _firstName text,
    in _secondName text,
    in _lastName text,
    in _secondLastName text,
    in _marriedName text,
    in _bornDate datetime,
    in _uuidRole varchar(36),
    in _dateNameUpdated datetime,
    in _mobilePhone varchar(15),
    in _email varchar(320),
    --
    in _uuidReligion varchar(36),
    --
    in _firstNameFather text,
    in _secondNameFather text,
    in _lastNameFather text,
    in _secondLastNameFather text,
    in _firstNameMother text,
    in _secondNameMother text,
    in _lastNameMother text,
    in _secondLastNameMother text,
    in _firstNameExtra text,
    in _secondNameExtra text,
    in _lastNameExtra text,
    in _secondLastNameExtra text,
    --
    --
    in _uuidPersonHistory varchar(36),
    -- _in uuidPerson varchar(36) ,
    in _dateEvent datetime,
    in _comment varchar(1000),
    in _attachment varchar(500),
    in _uuidAddress varchar(36),
    --
    -- in uuidPerson,
    in _uuidCity varchar(36),
    in _addressLine1 varchar(100),
    in _addressLine2 varchar(100),
    in _phoneNumber varchar(15)
    
) BEGIN DECLARE EXIT HANDLER FOR SQLEXCEPTION BEGIN SHOW ERRORS
LIMIT
    1;

ROLLBACK;

END;

DECLARE EXIT HANDLER FOR SQLWARNING BEGIN SHOW WARNINGS
LIMIT
    1;

ROLLBACK;

END;

START TRANSACTION;

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
        _uuidPerson,
        _id,
        _firstName,
        _secondName,
        _lastName,
        _secondLastName,
        _marriedName,
        _bornDate,
        _uuidReligion,
        _uuidRole,
        _dateNameUpdated,
        _mobilePhone,
        _email,
        _firstNameFather,
        _secondNameFather,
        _lastNameFather,
        _secondLastNameFather,
        _firstNameMother,
        _secondLastNameMother,
        _lastNameMother,
        _secondLastNameMother,
        _firstNameExtra,
        _secondNameExtra,
        _lastNameExtra,
        _secondLastNameExtra,
        1
    );

INSERT INTO
    PAS_PersonHistory (
        uuid,
        uuidPerson,
        dateEvent,
        comment,
        attachment
    )
VALUES
    (
        _uuidPersonHistory,
        _uuidPerson,
        _dateEvent,
        _comment,
        _attachment
    );

INSERT INTO
    PAA_Address (
        uuid,
        uuidPerson,
        uuidCity,
        addressLine1,
        addressLine2,
        phoneNumber
    )
VALUES
    (
        _uuidAddress,
        _uuidPerson,
        _uuidCity,
        _addressLine1,
        _addressLine2,
        _phoneNumber
    );

COMMIT;

END $ ----------
CALL registerperson()