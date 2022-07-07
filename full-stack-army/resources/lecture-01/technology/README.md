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
      - [PostgreSQL](https://www.postgresql.org/)
      - [MySQL](https://www.mysql.com/)
    - NoSQL
      - [MongoDB](https://www.mongodb.com/)
      - [Cassandra](https://cassandra.apache.org/_/index.html)
    - Key value
      - [Redis](https://redis.io/)
      - [DynamoDB](https://aws.amazon.com/dynamodb/)
    - Graph Database
      - [Neo4j](https://neo4j.com/)
    - Search Database
      - [Elastic Search](https://www.elastic.co/elasticsearch/) (Open source - Full Text Search)
      - [Algolia Search](https://www.algolia.com/) (Open AI 3 - Natural Language Processing)
- Software Architecture
  - OOP
  - OOP Design Pattern & Principles
  - DSA
  - Clean Code Architecture
  - Problem Solving
- Testing
  - Test Driven Development
  - E2E (End to End)
- Distribution
  - DevOps
    - Continuous
      - [Git](https://git-scm.com/) & [Github](https://github.com/)
      - [Linux](https://www.linux.org/), [SSH - Secure Shell HomePage](https://www.ssh.com/academy/ssh)
      - [Circle CI](https://circleci.com/), [Travis CI](https://www.travis-ci.com/), [Jenkins](https://www.jenkins.io/)
      - [Docker](https://www.docker.com), [Docker Compose](https://docs.docker.com/compose)
      - [Docker Swarm](https://docs.docker.com/engine/swarm), [Kubernetes](https://kubernetes.io/)
      - [Prometheus](https://prometheus.io/), [Nagios](https://www.nagios.org/)
      - [Ansible](https://www.ansible.com/)
  - Cloud Engineering
    - [VPC (Virtual Private Cloud)](https://en.wikipedia.org/wiki/Virtual_private_cloud)
    - [EC2 (Elastic Computing Cloud)](https://aws.amazon.com/ec2/)
    - [S3 (Simple Storage Service)](https://aws.amazon.com/s3/)
    - [RDS (Relational Database Service)](https://aws.amazon.com/rds/)
    - [DynamoDB](https://aws.amazon.com/dynamodb/)
    - [Route 53](https://aws.amazon.com/route53/)
    - [CloudFront (CDN)](https://aws.amazon.com/cloudfront/)
    - [SES (Simple Email Service)](https://aws.amazon.com/ses/)
    - [SNS (Simple Notification Service)](https://aws.amazon.com/sns/)
    - [SQS (Simple Queue Service)](https://aws.amazon.com/sqs/)
    - [API Gateway](https://aws.amazon.com/api-gateway/)
    - [Lambda](https://aws.amazon.com/lambda/)
    - [Step Functions](https://aws.amazon.com/step-functions/)
    - [Cloud Watch](https://aws.amazon.com/cloudwatch/)
    - [Cloud Formation](https://aws.amazon.com/cloudformation/), [Terraform](https://www.terraform.io/), [CDK](https://aws.amazon.com/cdk/)
- Maintenance

### Our Decision for PS Caffe:

- Architecture: Monolithic
- Database - NoSQL ([MongoDB Atlas](https://www.mongodb.com/atlas))
- Backend - NodeJS ([Express](https://expressjs.com/), [Hapi](https://hapi.dev/), [Fastify](https://www.fastify.io/)) (MVC)

### Steps:

- Requirements
- Design
- Implementation
  - UI/UX Design
  - Web Design
  - Frontend Development
  - Backend Development
  - Test Code
- Testing, Deployment
- Maintenance
