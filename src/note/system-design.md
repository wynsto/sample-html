---
title: "System Design"
date: "2021-10-05"
---

# System Design and Scalability

## Heading the Questions
* Communicate
* Go broad first
* Use the whiteboard
* Acknowledege interview concerns
* Be careful about assumptions
* State your assumptions explicitly
* Estimate when necessary
* Drive

## Design Steps
1. Scope the questions
2. Make Reasonable Assumptions
3. Draw the major components
4. Identify the key issues
5. Redesign for the key issue

## Algorithms that scale: step by step
1. Ask questions
1. Make believe
1. Get Real
1. Solve Problems

## Vertical Scaling and Horizontal Scaling
* Vertical Scaling means increasing the resources of the specific node. For example you might add additional memory to a server to improve its ability to handle load changes
* Horizontal Scaling meansing increasing the number of nodes. For example, you might add additional servers. thus decreasing the load on any one server.

Vertical scaling to generally easier than horizontal scaling, but it's limited. You can only add so much memory on disk spaces.

## Database Partitioning(Sharding)
* **Vertical Partitioning** devide the table by business
* **Key-Based(or Hash based) Partitioning** This uses some part of the data for example id to partition it.
* **Directory-Based Partionning** In this scheme, you maintain a lookup table for where the data can be found. This makes it relatively easy to add additional servers, but it comes with two major drawbacks. First, the lookup table can be a single point of failure. Second, constantly accessing this table impacts performance.
## Caching
In-memory cache can deliver very rapi result

## Asynchronous Processing & Queues


## Networking Metrics
* Bandwidth
* Throughput
* Latency

## MapReduce

## Considerations
* Failure
* Availability and Reliability
* Read-heavy vs. Write-heavy
* Security

