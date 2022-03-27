# Choose Necessary Technology

### Requirements: (SRS - Software Requirement Specification)

Sample : [http://itest.sourceforge.net/documentation/developer/Software_Requirements_Specification-iTest.pdf](http://itest.sourceforge.net/documentation/developer/Software_Requirements_Specification-iTest.pdf)

- Google Docs, Microsoft Office, Notion
- [Draw.io](http://Draw.io) ([https://app.diagrams.net/](https://app.diagrams.net/)), Lucid Chart (paid)

### Requirement Analysis & Design:

- System Design
    - Architectural Decision
        - Monolithic (Layered)
            - Easy to develop, but very complex to maintain when application grows
        - Microservice
            - very hard to develop, but easy to maintain
        - Server less (FAAS - Function as a service)
    - Select Database
        - SQL
            - PostgreSQL
            - MySQL
        - NoSQL
            - MongoDB
            - Casandra
        - Key value
            - Redis
            - DynamoDB
        - Graph Database
            - Neo4j
        - Search Database
            - Elastic Search (Open source - Full Text Search)
            - Algolia Search (Open AI 3 - Natural Language Processing)
- Software Architecture
    - OOP
    - OOP Design Pattern & Principles
    - DSA
    - Clean Code Architecture
    - Problem Solving
- Testing
    - Test Driven Development
    - E2E
- Distribution
    - DevOps
        - Continuous
            - Git & Github
            - Linux, SSH
            - Circle CI, Travis CI, Jenkins
            - Docker, Docker Compose
            - Docker Swarm, Kubernetes
            - Prometheus, Nagios
            - Ansible
    - Cloud Engineering
        - VPC (Virtual Private Cloud)
        - EC2 (Elastic Computing Cloud)
        - S3 (Simple Storage Service)
        - RDS (Relational Database Service)
        - DynamoDB
        - Route 53
        - CloudFront (CDN)
        - SES (Simple Email Service)
        - SNS (Simple Notification Service)
        - SQS (Simple Queue Service)
        - API Gateway
        - Lambda
        - Step Function
        - Cloud Watch
        - Cloud Formation, Terraform, CDK
- Maintenance

### Our Decision for PS Caffe:

- Architecture: Monolithic
- Database - NoSQL (MongoDB Atlas)
- Backend - NodeJS (Express, Hapi, Fastify) (MVC)