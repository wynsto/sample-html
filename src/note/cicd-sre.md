---
title: "Continuous integration (CI) and continuous delivery (CD) and SRE"
date: "2021-09-23"
---

## What is docker
Docker is a containerization platform which packages your application and all its dependencies together in the form of containers so as to ensure that your application works seamlessly in any environment be it development or test or production.
Docker containers, wrap a piece of software in a complete filesystem that contains everything needed to run: code, runtime, system tools, system libraries etc. anything that can be installed on a server.
This guarantees that the software will always run the same, regardless of its environment.

## What is meant by Continuous Integration?
Continuous Integration (CI) is a development practice that requires developers to integrate code into a shared repository several times a day. Each check-in is then verified by an automated build, allowing teams to detect problems early.

## What is the need for DevOps?
Nowadays instead of releasing big sets of features, companies are trying to see if small features can be transported to their customers through a series of release trains. This has many advantages like quick feedback from customers, better quality of software etc. which in turn leads to high customer satisfaction. To achieve this, companies are required to:

Increase deployment frequency
Lower failure rate of new releases
Shortened lead time between fixes
Faster mean time to recovery in the event of new release crashing
DevOps fulfills all these requirements and helps in achieving seamless software delivery. 

## Define Microservice Architecture
Microservices, aka Microservice Architecture, is an architectural style that structures an application as a collection of small autonomous services, modeled around a business domain.

## How is DevOps different from Agile/SDLC?
Agile software development methodology focuses on the development of software.
DevOps on the other hand is responsible for development as well as deployment of the software in the safest and most reliable way possible.

## What are the success factors for Continuous Integration?
* Maintain a code repository
* Automate the build
* Make the build self-testing
* Everyone commits to the baseline every day
* Every commit (to baseline) should be built
* Keep the build fast
* Test in a clone of the production environment
* Make it easy to get the latest deliverables
* Everyone can see the results of the latest build
* Automate deployment

## What does Containerization mean?
Containerisation is a type of virtualization strategy that emerged as an alternative to traditional hypervisor-based virtualization.
In containerization, the operating system is shared by the different containers rather than cloned for each virtual machine. For example Docker provides a container virtualization platform that serves as a good alternative to hypervisor-based arrangements.

## What is the difference between a Docker image and a container?
An instance of an image is called a container. You have an image, which is a set of layers. If you start this image, you have a running container of this image. You can have many running containers of the same image.

You can see all your images with docker images whereas you can see your running containers with docker ps (and you can see all containers with docker ps -a).

## What is the function of CI (Continuous Integration) server?
CI server function is to continuously integrate all changes being made and committed to repository by different developers and check for compile errors. It needs to build code several times a day, preferably after every commit so it can detect which commit made the breakage if the breakage happens.

## Explain Blue-Green Deployment Technique
Blue-green deployment is a technique that reduces downtime and risk by running two identical production environments called Blue and Green. At any time, only one of the environments is live, with the live environment serving all production traffic. For this example, Blue is currently live and Green is idle.

As you prepare a new version of your software, deployment and the final stage of testing takes place in the environment that is not live: in this example, Green. Once you have deployed and fully tested the software in Green, you switch the router so all incoming requests now go to Green instead of Blue. Green is now live, and Blue is idle.

This technique can eliminate downtime due to application deployment. In addition, blue-green deployment reduces risk: if something unexpected happens with your new version on Green, you can immediately roll back to the last version by switching back to Blue.

## Explain a use case for Docker
Docker a low overhead way to run virtual machines on your local box or in the cloud. Although they're not strictly distinct machines, nor do they need to boot an OS, they give you many of those benefits.
Docker can encapsulate legacy applications, allowing you to deploy them to servers that might not otherwise be easy to setup with older packages & software versions.
Docker can be used to build test boxes, during your deploy process to facilitate continuous integration testing.
Docker can be used to provision boxes in the cloud, and with swarm you can orchestrate clusters too.

## What are the differences between continuous integration, continuous delivery, and continuous deployment?
Developers practicing continuous integration merge their changes back to the main branch as often as possible. By doing so, you avoid the integration hell that usually happens when people wait for release day to merge their changes into the release branch.

Continuous delivery is an extension of continuous integration to make sure that you can release new changes to your customers quickly in a sustainable way. This means that on top of having automated your testing, you also have automated your release process and you can deploy your application at any point of time by clicking on a button.

Continuous deployment goes one step further than continuous delivery. With this practice, every change that passes all stages of your production pipeline is released to your customers. There's no human intervention, and only a failed test will prevent a new change to be deployed to production.

## What do you know about serverless model?
Serverless refers to a model where the existence of servers is hidden from developers. It means you no longer have to deal with capacity, deployments, scaling and fault tolerance and OS. It will essentially reducing maintenance efforts and allow developers to quickly focus on developing codes.

Examples are:

* Amazon AWS Lambda
* Azure Functions

## What is the difference between Monolithic, SOA and Microservices Architecture?
Monolithic Architecture is similar to a big container wherein all the software components of an application are assembled together and tightly packaged.
A Service-Oriented Architecture is a collection of services which communicate with each other. The communication can involve either simple data passing or it could involve two or more services coordinating some activity.
Microservice Architecture is an architectural style that structures an application as a collection of small autonomous services, modeled around a business domain.

