# Problem Solvers Caffe (PS Caffe)

PS Caffe is an imaginary online coffee delivery service. This business is designed specially for programmers by keeping their life style in mind. We need an application to accept orders from online. The application will have the following functional and non functional requirements.

**Special Notes:** We are not planning to grow fast. We need an [MVP (Minimal Viable Product)](https://en.wikipedia.org/wiki/Minimum_viable_product) or Workable Prototype to research our targeted market.

**Functional Requirements (Mostly client requirements):**

- Local Authentication:
  At the beginning we don't want to spend more on authentication services. Just keep it simple by implementing a local authentication using email & password. But make sure, we can extend local AUTH to OAuth2 anytime in future. We need the following features -
  - Hashed password
  - Email verification
  - Forget password
  - Block users if necessary
- Multiple Roles:
  There will be mainly five roles:
  - Admin: Admin can create and manage everything including sales data
  - Manager: Manager can't be able to create anything but can see sales data, inventory and products
  - Chef: They can only see queue orders
  - Delivery Man: They can manage the queue orders and change status
  - User: won't able to see any admin information but able to check products, reviews and place orders.
- User will be able to place orders
- User will be able see existing reviews and only place review after a successful order
- Sales dashboard
- Manage inventory
- Live tracking of the order

**Non Functional Requirements:**

- Secure
- Reliable
- Easy Maintainability
- Awesome Usability
- High availability (not main concern for MVP)
- Scalability (not main concern for MVP)

### 99.999999999% **(11-9 concept - most available)**

### 99.99% **(available but not up to the mark)**
