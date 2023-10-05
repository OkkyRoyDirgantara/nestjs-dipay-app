
enum JobTitle {
    manager = 'manager',
    director = 'director',
    staff = 'staff',
}
export interface EmployeeInterface extends Document {
    id: Object;
    name: String;
    email: String;
    phone_number: String;
    jobtitle: String;
    company_id: Object;
}