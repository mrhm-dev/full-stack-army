# Lecture 13 - Create Models, Write Pseudo Code and Adda

#### Pseudo code:

##### Authentication:

**Registration Process:**

```
Start
name = input()
email = input()
password = input()
if name && email && password is invalid:
  return 400 error

user = find user with email
if user found:
  return 400 error

hash = hash password
user = save name, email, hash to user model
return 201
End
```

**Login Process:**

```
Start
email = input()
password = input()

user = find user with email
if user not found:
  return 400 error

if password not equal to user hash:
  return 400 error

token = generate token using user
return token
End
```

---

**Progress:**  
Follow [this link](https://thirsty-camelotia-a8e.notion.site/Attendance-System-8b5ccfe9b2384e84b904d6a85013170b) to check the progress

**Source Code**  
[Click Here](../../src/attendance-system/)
