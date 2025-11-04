# Home Section Workflow

This document outlines the workflow for the "Home" section of the Bolt PKR application. This section is focused on the administrative and foundational setup of the academic environment.

## 1. Overview

The "Home" section provides the tools to create and manage the core academic structure of the institution. This includes defining departments, regulations, programmes, courses, and student groups. This workflow is typically performed by an administrator or a head of department.

## 2. Workflow Steps

The workflow for the Home section can be broken down into the following steps:

### Step 1: Login and Access the Home Dashboard

1.  The user logs into the application.
2.  By default, the user is presented with the **Home** dashboard, which provides an overview and navigation for the core setup tasks.

### Step 2: Define the Organizational Structure

This involves setting up the basic academic entities of the institution.

1.  **Manage Departments:**
    *   Navigate to the **Departments** page.
    *   Create, view, update, or delete academic departments (e.g., "Computer Science & Engineering").

2.  **Manage Regulations:**
    *   Navigate to the **Regulations** page.
    *   Create, view, update, or delete academic regulations (e.g., "R2021"). These regulations define the curriculum rules for a specific period.

### Step 3: Define the Curriculum

Once the organizational structure is in place, the curriculum can be defined.

1.  **Manage Programmes:**
    *   Within a department, create and manage programmes (e.g., "B.Tech in Information Technology").

2.  **Manage Courses:**
    *   Navigate to the **Courses** page.
    *   Create courses for each programme and regulation. This includes defining:
        *   Course Code (e.g., "IT-201")
        *   Course Name (e.g., "Data Structures")
        *   Credits

3.  **Define Course Outcomes (COs):**
    *   For each course, define the specific Course Outcomes (COs). These are statements that describe what a student is expected to know or be able to do upon completing the course.

### Step 4: Manage Student Groups and Classes

This step involves organizing students into batches and assigning them to classes.

1.  **Manage Batches:**
    *   Navigate to the **Batches** page.
    *   Create and manage student batches, which represent a group of students admitted in a particular year (e.g., "2021-2025 Batch").

2.  **Manage Classes:**
    *   Navigate to the **Classes** page.
    *   Create a class by associating a **Course** with a **Batch** and assigning a faculty member.
    *   If the class has multiple divisions, create different **Sections** (e.g., Section A, Section B).

3.  **Manage Students in a Class:**
    *   Within a class/section, manage the list of students.

## 3. Data Flow

The data flows in a hierarchical manner:

```
Institution
|--> Departments
    |--> Programmes
        |--> Courses (under a Regulation)
            |--> COs

Batches
|--> Students

Classes
|--> Assigns a Course to a Batch/Section
|--> Assigns a Faculty
|--> Contains a list of Students
```

This foundational data is then used by the **Exam** and **Attainment** sections to manage assessments and calculate academic performance.
