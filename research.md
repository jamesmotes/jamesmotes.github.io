---
layout: page
title: Research
permalink: /research/
---

{% include navigation.html %}

## Overview

Overview: My research is in intelligent multi-robot systems. In both large scale industrial settings (e.g., manufacturing and logistics) and more intimate settings (healthcare and in-home assistive robotics), we need human-centered robotic systems. While the majority of my work has contributed to theoretical frameworks for multi-robot planning, my recent and forthcoming work extends to making robotic solutions directable by human intelligence.

Robotic intelligence and the ability to direct it have always developed in tandem. Early robotic systems consisted of little more than motors, so we (humans) developed joysticks to directly control those motors. As robotic platforms were equipped with more intelligence, we developed tablets with GUIs to program basic sequences of repeatable actions. Current research increasingly uses natural language interfaces, which align well with the VLMs/LLMs that power modern task-planning systems. Building off of my experience in developing theoretical frameworks for multi-robot planning, my research is composed of three main thrusts to explore this co-evolution of robotic intelligence and human interaction with it, each driven by a guiding research question.

1. **Multi-Robot Planning**: How do we exploit growing general intelligence within the complexity of multi-robot problem spaces?  
2. **Human-Robot Co-Planning**: How do we design cooperative planning systems in which humans, robots, and AI services jointly create and refine plans?  
3. **Hardware and Software Acceleration**: How can we design planning architectures that fully exploit modern hardware and software accelerations?

I currently lead research teams in each thrust, mentoring 20+ graduate students and dozens of undergraduates along the way, resulting in 12 publications and an active pipeline of follow-up work. Our work has been supported both by government (NSF) and industry (Foxconn Interconnect Technologies, IBM, Toyota) funding. Additionally, I have been the primary author on a recent NSF Foundational Research in Robotics proposal along with several industry partnership proposals for companies including Amazon and Samsung. With the enthusiasm and emphasis on AI and robotics technologies, these partnerships will only increase as new hardware and AI technologies are making large scale and ubiquitous deployment of robotic solutions feasible for the first time in history.

The desire to implement my research for real world deployment motivated my time pursuing startup ventures, seeking to solve business problems with the concepts developed in the research lab. As the Principal Software Engineer at Optigon Inc., I lead the development of the user interface for controlling an automated optical metrology system and interacting with the AI powered analysis software for those measurements. I also led the AI research efforts for satisfying Optigon’s Department of Energy (DOE) Small Business Innovation Research (SBIR) grant which involves collaborative research efforts with other industry and academic partners including UCSD and MIT (with the first publication to be submitted in December). Optigon successfully delivered its first round of products this fall. As the DOE SBIR research conditions are satisfied, I will move to a consulting role as the company begins to explore autonomous semiconductor fabrication solutions.

Less successfully (but perhaps more informative), I founded an autonomous manufacturing solutions company in Houston, Texas. While interviewing local manufacturers across a variety of sectors (and performing a lot of free consulting), it became clear that both the level of intelligence in current state-of-the-art autonomous systems and especially the technology for instructing these systems at scale is not sufficient to deploy large scale autonomous solutions despite interest in implementing them. These experiences shaped my research questions, and while these experiences (concurrent with my postdoc appointment) helped me figure out that I truly want to be a professor, I take with me the desire to see my ideas transfer from the research lab into real world solutions.

---

## Multi-Robot Planning

**Research Question**: How do we exploit growing general intelligence within the complexity of multi-robot problem spaces?

### Problem & Principle

The main difficulty with multi-robot planning is the exponential growth in the state space as the number of robots or the task complexity increases. The simplest version of multi-robot planning, multi-agent pathfinding (MAPF) where agents must find conflict free paths on a shared graph (typically a grid), is intractable in its general form. Extending that problem to multi-robot motion planning (MRMP) for high degree-of-freedom robots (e.g., robotic manipulator arms), where planning a feasible path for a single robot in physical space is PSPACE-complete on its own, creates a planning problem of considerable complexity. This is further exacerbated when considering multi-robot task and motion planning (MR-TAMP) as each action a planning algorithm may consider as part of the solution corresponds to an additional MRMP problem.

Historically, methods either decouple the search space, considering robots one at a time, sacrificing completeness and coordination potential for speed and scalability, or accept the size of the search space to meet coordination requirements, providing slower approaches for smaller problems. Instead, my team exploited the insight that coordination levels vary during multi-robot problems. This led to the development of our guiding principle: **Match the algorithmic intelligence (and computational cost) to the local (sub)problem complexity.** In other words, de- and re-compose multi-robot problems into subproblems characterized by consistent internal complexity and coordination requirements, so that the cheapest method with sufficient intelligence can be employed to solve each subproblem. This enables better utilization of computational resources even on problems of significant scope and makes the core challenge of multi-robot planning (sub)problem decomposition and algorithm matching.

### Prior Results (Theoretical Foundations)

To this end, my team developed two novel multi-robot planning frameworks, Decomposable State Space Hypergraphs (DaSH, IEEE Transactions on Robotics [2]) and Adaptive Robot Coordination (ARC, IEEE Robotics and Automation Letters [3]). DaSH [2] is a predictive framework which leverages problem structure to predict where coordination is needed and proactively composes subproblems to isolate the use of more expensive planning techniques. This resulted in three orders of magnitude speedup in planning times over state-of-the-art baselines while accounting for twice as many robots and up to 20 objects in multi-manipulator rearrangement planning problems. The base framework has been extended to use lazy planning techniques [1] and exploit topological guidance [4] achieving an additional order of magnitude speedup in rearrangement problem planning times and handling up to 128 robots in congested MRMP settings. These results have been demonstrated on autonomous biofab labs and mining settings in addition to the standard manufacturing and logistics problems.

ARC [3] is a reactive framework which dynamically introduces and expands subproblems during planning time. Subproblems are created (and expanded) as coordination requirements are discovered, and the framework dynamically adapts the complexity (and cost) of the planning techniques employed to match the local features. As a result, ARC was the only method that achieved 100% success rate for problem sets with large variance in the amount of coordination required. We have extended the base framework to account for kinodynamic constraints [5] and exploit data from prior solutions for faster planning [6] and have seen additional extensions by other research groups to tackle problems like congested MRMP.

Through the course of my multi-robot planning research, I have mentored 5 Ph.D. students, and 1 masters student (along with several undergraduates). This led directly to the Ph.D. dissertation work of Irving Solis (Postdoc at UIUC) and Hannah Lee (Robotics researcher at Anduril Industries) and the masters thesis of Mike Qin (Robotics engineer at UBTECH Robotics).

### Future Directions (Algorithmic Foundations, VLM/LLM Reasoning, Human-Robot Teams)

I am interested in turning the guiding principle of matching algorithmic intelligence and computational cost to local (sub)problem complexity into a general toolbox for large-scale multi-robot planning. There is a lot of potential for additional theoretical and algorithmic development, extending the frameworks into new, larger problems and seeking to maintain theoretical guarantees while achieving the speed and scalability needed to deploy in real world settings. Another direction is exploring how modern VLM/LLM-based agents can be integrated into these frameworks. Assuming any new AI technique can, as a black box, overcome the fundamental challenges of multi-robot planning is naive. In fact the prohibitively large state spaces induced by both large numbers of robots and task length and complexity should sound familiar to LLM researchers used to dealing with the limitations of context windows. I am interested in applying the guiding principle of matching intelligence and computational cost to the local (sub)problem complexity as we explore the application of this new form of intelligence to the multi-robot domain.

I want to explore adapting the predictive [2] and reactive [3] frameworks from my prior work to exploit the general domain reasoning of VLM/LLM-powered agents within the scalable theoretical architectures we have developed and validated for multi-robot planning. This will not only enable smarter multi-robot systems, but it is also likely to provide insights into analogous problems of managing context windows within LLM-based multi-agent systems and architectures. Therefore, I will naturally seek collaborations with colleagues in both academia and industry working on scalable LLM-based multi-agent solutions to better understand and study this overlapping problem.

Finally, I am interested in extending these frameworks to explicitly model humans as agents with their own capabilities, constraints, and preferences. This sets the stage for Thrust 2, studying human-robot interaction (HRI) and cooperative planning. The goal is to plan with humans in-the-loop, adapting different HRI techniques to local subproblems to match coordination requirements.

### Potential Funding Sources

NSF Foundational Research in Robotics (FRR), NSF Cyber-Physical Systems (CPS), NSF CISE Robust Intelligence (RI), NSF Advanced Manufacturing programs in CMMI, Amazon Research Awards (ARA), Advanced Robotics for Manufacturing (ARM) Institute.

---

## Human-Robot Co-Planning

**Research Question**: How do we design cooperative planning systems in which humans, robots, and AI services jointly create and refine plans?

### Problem & Principle

As robotic intelligence improves, we are no longer limited to robots that simply execute fixed, recomputed plans. For the first time, it is becoming feasible to deploy teams of capable robots into real homes, labs, and factories, and to ask them to work with people instead of just near them. This presents a new challenge of not only designing interfaces to match the current level of abstraction accessible to robotic intelligence, but of designing systems in which humans, robots, and AI services can co-plan over shared representations of tasks, environments, and constraints, matching the right level of abstraction for the different elements or participants in the system.

### Prior and Ongoing Work

As a postdoc, I am currently leading a graduate research team (2 Ph.D. students, 1 masters, and another postdoc) studying the use of natural language (NL) to parameterize motion planning algorithms, resulting in motions matching NL expressed user preferences and can be iteratively refined over time. This approach treats NL as a way for users to shape the underlying planning objectives and constraints, not just issue goals. As part of this effort, I was the primary author on a recent NSF Foundational Research in Robotics proposal in collaboration with natural language processing researchers at UIUC. The project will allow non-technical users to customize robot behavior in their homes and work places.

Additionally, I have collaborated with Insper and other UIUC researchers to develop AR/VR interfaces for interacting with motion planning algorithms [7]. This system provides immediate visual feedback to the human on how the robot will operate in the environment as the human considers changes to the environment such as obstacle placement or robot positioning.

Finally, as the Principal Software Engineer at Optigon, my primary responsibility was the development of the UI exposing control of an automated metrology platform and AI powered analysis tool suite in a domain where data privacy, reliability, and safety are critical. Throughout the process, I learned invaluable lessons on interviewing users and understanding their thought process and perspective when using automation technologies. We successfully launched our first product this fall to overwhelmingly positive feedback, increasing researcher throughput by orders of magnitude (Customer quote: “I have taken more measurements in the first week than in my whole career!”).

### Future Directions (Co-Planning Infrastructure, AI-Assisted Design, Privacy and Guarantees)

Building from these foundational elements (NL for direction, AR/VR for feedback), I am interested in developing co-planning infrastructure that leverages these interfaces and related modalities as operations on the shared task, environment, and subproblem representations developed in Thrust 1. This focuses not just on one directional task specification, but instead supports iterative dialogue where humans and AI algorithms jointly refine missions and plans. This naturally connects with colleagues in HRI, HCI, human-subjects research, and cognitive science to study what levels of abstract and types of communication are natural for non-expert users and how they affect mental models and performance.

One promising application of co-planning is AI-assisted CAD and design-for-manufacturing/assembly. Human designers and the planning algorithms developed in Thrust 1 share CAD-centric representations of parts, fixtures, and assembly sequences, using multi-robot planning to evaluate metrics such as feasibility, cost, and robustness and to suggest alternative designs which better utilize robot capabilities. I will seek collaborations with CAD, design automation, and manufacturing researchers and companies interested in deploying robotic solutions.

There is also the open question of how to extend co-planning to large multi-robot systems, where humans co-plan for high-level policies, priorities, and safety constraints for dozens or hundreds of robots. The guiding principles in Thrust 1 really come into play here as the system must adopt a hierarchical approach to scale the complexity while staying in the bounds of human mental models.

These directions also raise safety, privacy, and security concerns, from physical safety and privacy in intimate settings to IP protection in AI-assisted CAD and cybersecurity for large scale systems exposed to external co-planning interfaces. As we discover these questions, I will work with colleagues in these areas to create robust solutions safe enough to deploy in the real world.

### Potential Funding Sources

NSF Human-Centered Computing / Cyber-Human Systems (HCC/CHS), NSF Future of Work at the Human-Technology Frontier (FW-HTF), CPS, FRR, NSF Secure and Trustworthy Cyberspace (SaTC), CMMI, Microsoft Research, ARA.

---

## Hardware and Software Acceleration

**Research Question**: How can we design planning architectures that fully exploit modern hardware and software accelerations?

### Problem & Principle

As robotic intelligence and interactions with it improve, we still face the challenge of making these systems fast and responsive enough for real world, especially large scale, applications. To this end, advances to hardware and the new software design patterns they unlock offer opportunities to accelerate the core components underlying the systems developed in Thrusts 1 & 2.

### Prior and Ongoing Work (Computational Geometry, GPU/Serialization, Parallel Computing)

As a postdoc, I lead a graduate research team (4 Ph.D. students - 1 now graduated, and 1 masters student) in collaboration with theory faculty at UIUC to exploit computation geometry to accelerate core motion planning algorithms to respond to physical environment changes (e.g., changes in obstacle positions). Our initial work demonstrated a 60% speedup in basic motion planning settings [8]. We have 4 more manuscripts under preparation for submission by the end of the year extending the basic computational techniques, parallelizing the primitive geometric operations on the GPU, and exploiting the reduction in the cost of motion planning primitives in the frameworks from Thrust 1.

Additionally, as part of our multi-robot research, we developed a parallelized version of the core multi-agent pathfinding method underlying many methods developed by both us and dozens of other research labs [9].

### Future Directions

I am interested in revisiting planning architectures in the wake of drastic reductions in the cost of basic motion planning primitives both from approximation methods like [8] and modern CPU/GPU accelerations. Many existing approaches defer motion planning to avoid its computational cost, sacrificing feasibility and cost information at higher decision layers to keep runtimes manageable. Now that motion planning is cheaper, these architectures need to be reevaluated to see where the new bottlenecks lie, how the cost-intelligence boundary shifts within frameworks like DaSH and ARC from Thrust 1, and which theoretical guarantees (e.g., optimality or robustness) become practical when motion planning is no longer a prohibitive cost.

Complimentary, I am interested in leveraging the insight developed in Thrust 2 to inform what information is actually useful when performing co-planning. Co-planning interfaces require fast, informative feedback about feasibility, costs, alternative plans, etc., but this does not mean that all information is necessary or productive when exposed to the human in the loop. This creates an opportunity for collaboration of HCI, cognitive science, systems, and theory researchers to design abstractions and approximations well suited for both co-planning and acceleration.

Finally, I see opportunities to unlock large scale autonomous robotic systems by co-designing frameworks and representations for hardware acceleration that leverage cloud and edge computing in dynamic settings with hundreds of cooperating robots. This will again require collaborations with privacy and security colleagues along with systems and networking researchers to build safe, robust systems deployable in real world settings.

### Potential Funding Sources

FRR, CPS, RI, CMMI, NSF CISE core systems programs, NVIDIA Academic Programs, Amazon Web Services (AWS) cloud credits, ARA, ARM.

---

## References

[1] S. Lee, Motes, James D., I. Ngui, M. Morales, and N. M. Amato, “Lazy-dash: Lazy approach for hypergraph-based multi-robot task and motion planning,” arXiv preprint arXiv:2504.05552, 2025.  
[2] Motes, James D., T. Chen, T. Bretl, M. M. Aguirre, and N. M. Amato, “Hypergraph-based multi-robot task and motion planning,” IEEE Transactions on Robotics, vol. 39, no. 5, pp. 4166–4186, 2023.  
[3] I. Solis, Motes, James D., M. Qin, M. Morales, and N. M. Amato, “Adaptive robot coordination: A subproblem-based approach for hybrid multi-robot motion planning,” IEEE Robotics and Automation Letters, vol. 9, no. 8, pp. 7238–7245, 2024.  
[4] C. McBeth, Motes, James D., I. Ngui, M. Morales, and N. M. Amato, “Scalable multi-robot motion planning using guidance-informed hypergraphs,” arXiv preprint arXiv:2311.10176, 2023.  
[5] M. Qin, I. Solis, Motes, James D., M. Morales, and N. M. Amato, “K-arc: Adaptive robot coordination for multi-robot kinodynamic planning,” IEEE Robotics and Automation Letters, 2025.  
[6] I. Solis, Motes, James D., M. Qin, M. Morales, and N. M. Amato, “Experience-based subproblem planning for multi-robot motion planning,” arXiv preprint arXiv:2411.08851, 2024.  
[7] I. Ngui, C. McBeth, A. Santos, G. He, K. J. Mimnaugh, Motes, James D., L. Soares, M. Morales, and N. M. Amato, “Erupt: An open toolkit for interfacing with robot motion planners in extended reality,” arXiv preprint arXiv:2510.02464, 2025.  
[8] S. Ashur, M. Lusardi, M. Markowicz, Motes, James D., M. Morales, S. Har-Peled, and N. M. Amato, “Spite: Simple polyhedral intersection techniques for modified environments,” arXiv preprint arXiv:2407.00259, 2024.  
[9] H. Lee, Motes, James D., M. Morales, and N. M. Amato, “Parallel hierarchical composition conflict-based search for optimal multi-agent pathfinding,” IEEE Robotics and Automation Letters, vol. 6, no. 4, pp. 7001–7008, 2021.
