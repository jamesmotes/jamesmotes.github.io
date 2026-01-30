---
layout: default
title: Home
permalink: /
---

{% include navigation.html %}

# James D. Motes

_Postdoctoral Researcher, University of Illinois Urbana Champaign_  
_On the 2025–26 faculty job market in Computer Science, ECE, and Robotics._

**Email**: [jmotes2@illinois.edu](mailto:jmotes2@illinois.edu) | **Documents**: <a href="/assets/CV/james_motes_cv.pdf" download>CV</a> | <a href="/assets/documents/james_motes_research_statement.pdf" download>Research</a> | <a href="/assets/documents/james_motes_teaching_statement.pdf" download>Teaching</a> | **Profiles:** [Google Scholar](https://scholar.google.com/citations?user=O_Zne90AAAAJ&hl=en&oi=ao) | [Parasol Lab](https://www.parasollab.web.illinois.edu/people/postdocs/jmotes2/) 

I design intelligent multi-robot and human-robot planning frameworks and hardware/software accelerations for real-world robotic deployments.

---

## Research Snapshot

### Multi-Robot Planning
Multi-robot planning explodes in complexity as we add robots, degrees of freedom, and task structure. My work exploits the fact that only some regions and phases of a problem require tight coordination, using frameworks like DaSH and ARC to decompose problems and match each subproblem to the cheapest planner with enough intelligence. This yields orders-of-magnitude speedups and scales to large teams of manipulators and objects in realistic rearrangement and factory scenarios.

[Learn more about Multi-Robot Planning →](/research/#multi-robot-planning)

### Human-Robot Co-Planning
Robots are shifting from executing fixed plans to co-planning with people in homes, labs, and factories. I build systems where humans, robots, and AI services share task and environment representations and iteratively refine plans through natural language and extended-reality interfaces like ERUPT. The goal is to support dialogue and joint decision-making, not one-shot commands.

[Learn more about Human-Robot Co-Planning →](/research/#human-robot-co-planning)

### Hardware & Software Acceleration
Many modern robotic systems are limited by how fast core planning primitives can run, not by what we could plan in principle. I work with theory and systems collaborators to accelerate these primitives using computational geometry, GPU parallelization, and serialized multi-agent search. This lets us redesign planning architectures so large-scale multi-robot systems respond in real time while still supporting the rich co-planning behaviors above.

[Learn more about Hardware & Software Acceleration →](/research/#hardware--software-acceleration)

---

## Featured Demo: Lazy-DaSH Multi-Robot Rearrangement

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 20px 0;">
  <iframe src="https://www.youtube.com/embed/3eHOzTikcXc" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" frameborder="0" allowfullscreen></iframe>
</div>

Lazy-DaSH demonstrates efficient multi-robot task and motion planning using a lazy approach to hypergraph-based planning, achieving faster planning times and improved scalability.

---

## Recent Highlights

- **2026-1** – "Scalable Multi-Robot Motion Planning Using Guidance-Informed Hypergraphs" conditionally accepted to IEEE Robotics and Automation Letters. [arxiv:2311.10176](https://arxiv.org/pdf/2311.10176)
- **2026-1** – "Lazy-DaSH: Lazy Approach for Hypergraph-based Multi-Robot Task and Motion Planning" conditionally accepted to IEEE Transactions on Robotics. [arxiv:2504.05552](https://arxiv.org/pdf/2504.05552)
- **2025-11** – "An Analysis of Constraint-Based Multi-Agent Pathfinding Algorithms" accepted to IEEE Transactions on Robotics (to appear 2026). [IEEE](https://ieeexplore.ieee.org/iel8/8860/11297026/11288072.pdf)


[View all news →](/news/)
