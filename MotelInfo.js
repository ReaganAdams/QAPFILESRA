// MotelCustomer object constructor
function MotelCustomer(name, birthDate, gender, roomPreferences, paymentMethod, mailingAddress, phoneNumber, checkInDate, checkOutDate) {
    this.name = name;
    this.birthDate = new Date(birthDate);
    this.gender = gender;
    this.roomPreferences = roomPreferences || [];
    this.paymentMethod = paymentMethod;
    this.mailingAddress = mailingAddress || {};
    this.phoneNumber = phoneNumber;
    this.checkInDate = new Date(checkInDate);
    this.checkOutDate = new Date(checkOutDate);

    // Method to calculate age
    this.calculateAge = function () {
        const today = new Date();
        const birthYear = this.birthDate.getFullYear();
        const currentYear = today.getFullYear();
        return currentYear - birthYear;
    };

    // Method to calculate duration of stay in days
    this.calculateStayDuration = function () {
        const millisecondsInDay = 24 * 60 * 60 * 1000;
        const checkInTime = this.checkInDate.getTime();
        const checkOutTime = this.checkOutDate.getTime();
        return Math.round((checkOutTime - checkInTime) / millisecondsInDay);
    };

    // Method to generate a description of the customer
    this.getDescription = function () {
        const age = this.calculateAge();
        const stayDuration = this.calculateStayDuration();

        return `Customer Name: ${this.name}\nAge: ${age} years\nGender: ${this.gender}\nRoom Preferences: ${this.roomPreferences.join(', ')}\nPayment Method: ${this.paymentMethod}\nMailing Address: ${JSON.stringify(this.mailingAddress)}\nPhone Number: ${this.phoneNumber}\nCheck-In Date: ${this.checkInDate.toDateString()}\nCheck-Out Date: ${this.checkOutDate.toDateString()}\nDuration of Stay: ${stayDuration} days.`;
    };
}

// Example usage
const customer1 = new MotelCustomer(
    'Reagan Adams',
    '2001-01-25',
    'Female',
    ['Non-Smoking', 'Double Bed'],
    'Credit Card',
    { street: '7 Murley Drive', city: 'Mount Pearl', prov: 'NL', zip: 'A1N3E1' },
    '725-0437',
    '2023-11-01',
    '2023-11-30'
);

console.log(customer1.getDescription());