# Lecture 12 - Attendance System Requirement Analysis

#### Agenda

- Functional Requirement Analysis
- Create A Basic SRS
- Choose Technologies

---

#### Client's Requirement:

We need an attendance system. Students can create their own profile. Admin can see list of students and their attendances. Admin can enable and disable attend button. Also this button can be disabled based on a timer. Each time admin enable attend button, students can participate for only once. Each day, student will have a time sheet of attendance.

Student can see their own time logs and attend button when enabled.

---

### Functional Requirements:

#### Admin:

- Admin can create student.
- Admin can delete / update / check students information.
- Admin can change status of a student.
- Admin can check time sheet of a student.
- Admin can enable or disable attendance button.
- Admin can check stats of a given day.

#### Student:

- Student can register themselves.
- There will be following account status for a student:
  - Pending
  - Active
  - Reject
- User can login with their credentials.
- Pending and rejected users won't have anything in their profile.
- Active users can update their profile info.
  - First Name
  - Last Name
  - Email
  - Phone No
  - Profile Picture
- Active user can change / update password.
- Active users can see their time sheet
  - Calender view
  - List view
  - Table view
- Active users can participate in attendance system.
- User can logout.

---

### Requirement Analysis:

#### Models:

##### User

- Name
- Email
- Password
- Roles
- AccountStatus

##### Profile

- First Name
- Last Name
- Phone No
- Profile Picture
- UserId

##### StudentAttendance

- UserId
- CreatedAt: DateTime
- AdminAttendanceId

##### AdminAttendance

- CreatedAt: DateTime
- Status
- TimeLimit

#### Endpoints:

##### Student Endpoints

- POST/auth/login [public]
- POST/auth/register [public]
- PATCH/profiles [private]
- PATCH/profiles/avatar [private]
- PUT/auth/change-password [private]
- GET/timesheet [private]
- GET/attendance [private]
- GET/attendanceStatus [private]

##### Admin Endpoints

- GET/users [private]
- POST/users [private]
- PATCH/users/userId [private]
- DELETE/users/userId [private]
- GET/users/userId [private]
- GET/profiles [private]
- POST/profiles [private]
- PATCH/profiles/profileId [private]
- DELETE/profiles/profileId [private]
- GET/profiles/profileId [private]
- GET/timesheet/userId [private]
- GET/timesheet/stats [private]
- POST/attendance/enable [private]
- GET/attendance/disabled/:attendanceId [private]

---

#### Visualize our workflow

![Visualize our model](./visualize-our-model.jpg)

---

#### Project Management

See through [this notion link](https://thirsty-camelotia-a8e.notion.site/Projects-26859035fe2a4649b9556f5fbe77728b) to get an idea about project management
