/**
 * Represent a model of the Person.
 * 
 * @param {string} uuid varchar(36) PK 
 * @param {string} id varchar(20) 
 * @param {string} firstName text 
 * @param {string} secondName text 
 * @param {string} lastName text 
 * @param {string} secondLastName text 
 * @param {string} marriedName text 
 * @param {string} bornDate datetime 
 * @param {string} uuidRole varchar(36) 
 * @param {string} dateNameUpdated datetime 
 * @param {string} mobilePhone varchar(15) 
 * @param {string} email varchar(320)
 */

class Person {

    constructor(
        uuid,
        id,
        firstName,
        secondName,
        lastName,
        secondLastName,
        marriedName,
        bornDate,
        uuidRole,
        dateNameUpdated,
        mobilePhone,
        email
    ) {
        this.uuid = uuid
        this.id = id
        this.firstName = firstName
        this.secondName = secondName
        this.lastName = lastName
        this.secondLastName = secondLastName
        this.marriedName = marriedName
        this.bornDate = bornDate
        this.uuidRole = uuidRole
        this.dateNameUpdated = dateNameUpdated
        this.mobilePhone = mobilePhone
        this.email = email
    }
}

module.exports = Person;