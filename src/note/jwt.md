---
title: "JWT-JSON Web Token"
date: "2021-08-19"
tag: ['web']
---

# Introduction
JSON Web Token, or JWT("jot") for short, is a standard for safely padding claims in space constrained environments.

# What problem does it sovle?
Although the main purpose of JWTs is to transfer claims between two parties, arguably the most important aspect of this is the standardization effort in the form of a simple, optionally validated and/or encrypted, container format. Ad hoc solutions to this same problem have been implemented both privately and publicly in the past. Older standards8 for establishing claims about certain parties are also available. What JWT brings to the table is a simple, useful, standard container
format.
Although the definition given is a bit abstract so far, it is not hard to imagine how they can be used: login systems (although other uses are possible). We will take a closer look at practical applications

Some of these applications include:
• Authentication
• Authorization
• Federated identity
• Client-side sessions (“stateless” sessions)
• Client-side secrets 

