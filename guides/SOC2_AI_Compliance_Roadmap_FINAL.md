---
slug: soc-2
title: "SOC 2 Compliance Roadmap for AI Teams 2026"
date: "2026-03-01"
framework: "SOC 2"
excerpt: "Build audit-ready AI systems for enterprise trust. Covers all five Trust Service Categories, AI-specific control domains, model governance, the audit process, and common control gaps auditors find in AI companies."
author: "SpanForge"
audience:
  - AI Startups
  - SaaS Companies
  - Enterprise AI Teams
  - Security & Compliance Teams
  - Healthcare & Finance AI
  - AI Governance Leaders
sections: 19
---

# SOC 2 Compliance Roadmap for AI Teams 2026
## Building Audit-Ready AI Systems for Enterprise Trust

---

## Who This Guide Is For

This guide is designed for:

- **🚀 AI Startups** — Pursuing SOC 2 certification to unlock enterprise sales
- **💼 SaaS Companies** — Maintaining SOC 2 compliance as AI features are added to existing products
- **🏢 Enterprise AI Teams** — Demonstrating security and governance maturity to customers and partners
- **🔍 Security & Compliance Teams** — Extending existing SOC 2 programs to cover AI-specific risks
- **🏥 Healthcare & Finance AI** — Meeting the elevated SOC 2 expectations of regulated-industry customers
- **🤝 AI Governance Leaders** — Connecting AI governance to the audit evidence customers actually ask for

If your organization processes customer data using AI, or sells AI-powered products to enterprise customers, SOC 2 is the compliance framework your customers care about most. This guide is for you.

---

## A Note on This Guide

This guide is designed for organizations building SOC 2-compliant AI systems — whether pursuing initial certification or extending an existing SOC 2 program to cover new AI capabilities. It explains what SOC 2 requires, how AI creates new challenges for SOC 2 compliance, and what governance-ready AI looks like from a SOC 2 perspective.

**What this guide does:**

- ✅ Explains the SOC 2 framework and Trust Service Criteria
- ✅ Shows how AI systems create new challenges for each Trust Service Category
- ✅ Translates SOC 2 criteria into operational AI engineering and governance practices
- ✅ Provides a practical readiness framework for AI-powered SOC 2 attestation

**What you'll need beyond this guide:**
- A qualified CPA firm for the actual SOC 2 audit (required for attestation)
- Legal counsel (for customer contract and liability considerations)
- Technical implementation support (for controls specific to your AI architecture)

**Ready to discuss your SOC 2 readiness?** [Schedule a 30-minute SOC 2 Readiness Assessment](#contact)

---

## A Critical Note on SOC 2 and AI

SOC 2 was designed for traditional software systems. AI systems — particularly those using large language models, machine learning pipelines, and third-party AI APIs — create challenges that the standard Trust Service Criteria were not written to address.

**The core tension:** SOC 2 auditors assess controls against written criteria. AI systems introduce behaviors that are probabilistic, emergent, and difficult to fully specify in advance. This creates genuine ambiguity about what "adequate controls" looks like for AI.

**What this means for you:**
- AI systems require new types of controls that don't map cleanly to traditional SOC 2 categories
- Auditors are developing AI-specific expectations that vary across firms
- Documentation and evidence requirements for AI are higher than for deterministic software
- Third-party AI APIs create supply chain risks that must be explicitly addressed

This guide addresses both the traditional SOC 2 requirements and the AI-specific control gaps that most compliance programs miss.

---

## Table of Contents

1. [Who This Guide Is For](#who-this-guide-is-for)
2. [What SOC 2 Actually Is](#section-1-what-soc-2-actually-is)
3. [Why This Matters for Your Business](#section-2-why-this-matters-for-your-business)
4. [SOC 2 Type I vs. Type II](#section-3-soc-2-type-i-vs-type-ii)
5. [The Five Trust Service Categories](#section-4-the-five-trust-service-categories)
6. [Security (CC): The Foundation](#section-5-security-cc--the-foundation)
7. [Availability (A1): AI System Uptime and Resilience](#section-6-availability-a1--ai-system-uptime-and-resilience)
8. [Processing Integrity (PI): AI Accuracy and Reliability](#section-7-processing-integrity-pi--ai-accuracy-and-reliability)
9. [Confidentiality (C): Protecting Customer Data in AI Systems](#section-8-confidentiality-c--protecting-customer-data-in-ai-systems)
10. [Privacy (P): Personal Information in AI Pipelines](#section-9-privacy-p--personal-information-in-ai-pipelines)
11. [AI-Specific Control Domains](#section-10-ai-specific-control-domains)
12. [The SOC 2 Audit Process](#section-11-the-soc-2-audit-process)
13. [Third-Party AI APIs and the Supply Chain](#section-12-third-party-ai-apis-and-the-supply-chain)
14. [Common Control Gaps in AI Systems](#section-13-common-control-gaps-in-ai-systems)
15. [How SOC 2 Connects to Other Frameworks](#section-14-how-soc-2-connects-to-other-frameworks)
16. [Compliance Readiness Assessment](#section-15-compliance-readiness-assessment)
17. [Getting Started](#section-16-getting-started)
18. [About SpanForge](#section-17-about-spanforge)
19. [Resources & Next Steps](#section-18-resources--next-steps)

---

## Section 1: What SOC 2 Actually Is

SOC 2 (Service Organization Control 2) is an auditing standard developed by the American Institute of Certified Public Accountants (AICPA). It defines criteria for managing customer data based on five Trust Service Categories: Security, Availability, Processing Integrity, Confidentiality, and Privacy.

Unlike regulatory frameworks such as GDPR or HIPAA, SOC 2 is not a law. No regulation requires you to have SOC 2 certification. But for SaaS and AI companies selling to enterprises, SOC 2 has effectively become a market requirement — without it, many enterprise procurement processes simply won't proceed.

### What SOC 2 Produces

A SOC 2 examination produces a report from an independent CPA firm that attests to whether your controls meet the Trust Service Criteria. Customers use this report as evidence that your organization handles their data responsibly.

### What SOC 2 Is Not

**SOC 2 is not a certification in the traditional sense.** It is an attestation — an independent auditor's opinion that your controls meet specified criteria at a point in time (Type I) or over a period (Type II).

**SOC 2 is not a guarantee of security.** A clean SOC 2 report means your controls were adequate at the time of the audit. It does not mean you cannot be breached.

**SOC 2 is not prescriptive.** The Trust Service Criteria define *what* outcomes your controls should achieve, not *how* to achieve them. The specific controls you implement are your choice.

---

## Section 2: Why This Matters for Your Business

### Enterprise Sales

For most AI companies, SOC 2 is the single most important compliance milestone for unlocking enterprise revenue.

| Without SOC 2 | With SOC 2 |
|---|---|
| Blocked from most enterprise procurement | Enterprise deals proceed |
| Security questionnaires take weeks to complete | Share SOC 2 report; questionnaire time drops dramatically |
| Customers require lengthy custom security reviews | Standard review; faster close |
| Limited to mid-market and SMB customers | Full enterprise market accessible |
| Lost deals to SOC 2-certified competitors | Competitive parity on compliance |

**The enterprise math:** A single enterprise deal worth $100K–$1M+ makes SOC 2 investment ($30K–$80K for initial audit) trivially worthwhile.

### Financial Services and Healthcare Customers

Banks, insurance companies, and healthcare organizations impose elevated SOC 2 requirements:

- **SOC 2 Type II required** (not just Type I)
- **Specific Trust Service Categories required** (often all five)
- **Annual surveillance audits expected**
- **Sub-service organization (vendor) controls assessed**
- **AI-specific addenda increasingly requested**

If your target market includes financial services or healthcare, your SOC 2 program must be built to their standard from the start.

### The AI-Specific Pressure

Enterprise customers are increasingly adding AI-specific questions to their SOC 2 requirements:

- How do you control AI model outputs that may contain customer data?
- How do you prevent AI from being used to exfiltrate confidential information?
- How do you ensure AI processing accuracy for customer-facing decisions?
- What controls govern your use of third-party AI APIs with customer data?
- How do you audit AI system behavior over time?

Organizations that cannot answer these questions with documented controls are losing deals to competitors who can.

---

## Section 3: SOC 2 Type I vs. Type II

Understanding the difference is essential for planning your SOC 2 program.

### SOC 2 Type I

**What it is:** An auditor's opinion on whether your controls are *suitably designed* to meet the Trust Service Criteria at a **specific point in time**.

**What it covers:**
- Documentation of your control environment
- Evidence that controls are designed appropriately
- Snapshot of your control design at the audit date

**What it does not cover:**
- Whether controls have been operating effectively over time
- Historical evidence of control operation
- Incidents or failures that occurred before the audit date

**Timeline:** Can be completed in 2–4 months from when controls are in place.

**When to start with Type I:**
- First SOC 2 report — establishes your control baseline
- Moving quickly to satisfy an urgent enterprise requirement
- Building toward Type II (Type I is typically a precursor)

### SOC 2 Type II

**What it is:** An auditor's opinion on whether your controls have been *operating effectively* over a **specified period** (typically 6–12 months).

**What it covers:**
- All of Type I (design adequacy)
- Evidence that controls operated throughout the audit period
- Testing of control effectiveness using samples from the period
- Identification of any exceptions (control failures)

**What it proves:**
- Controls were not just designed well — they were actually followed
- The organization consistently maintained its control environment over time

**Timeline:** Requires a minimum observation period after controls are in place — typically 6–12 months, though some auditors and customers accept shorter periods of 3–6 months. Total timeline typically 9–18 months from program start, depending on observation window, auditor requirements, and customer expectations.

**Why Type II matters:**
Enterprise customers — especially in regulated industries — require Type II. A Type I report demonstrates intent; a Type II demonstrates practice.

### The Practical Path

```
Month 1–3:    Implement controls and documentation
Month 3–4:    SOC 2 Type I audit (snapshot)
Month 4–16:   Observation period (controls operating)
Month 16–18:  SOC 2 Type II audit (12-month period)
Month 18+:    Annual Type II surveillance audits
```

---

## Section 4: The Five Trust Service Categories

SOC 2 is built on five Trust Service Categories. **Security (CC) is mandatory** for all SOC 2 examinations. The other four are optional — you select which to include based on customer requirements and your service commitments.

| Category | Code | Required? | When to Include |
|---|---|---|---|
| **Security** | CC | ✅ Always | Mandatory for all SOC 2 |
| **Availability** | A1 | Optional | If you make uptime commitments to customers |
| **Processing Integrity** | PI | Optional | If accuracy of your data processing matters to customers |
| **Confidentiality** | C | Optional | If you handle confidential business information |
| **Privacy** | P | Optional | If you process personal information |

**For AI companies:** Many include Security, Confidentiality, and Privacy as a baseline, with Availability and Processing Integrity added when customer commitments or use cases warrant them. AI systems touch every Trust Service Category in ways traditional software does not — assess your specific customer expectations before finalizing scope.

---

## Section 5: Security (CC) — The Foundation

The Security category is the core of SOC 2. It uses the Common Criteria (CC), which are organized around the COSO internal control framework. Every SOC 2 examination includes Security.

### The Common Criteria Structure

| Criteria Group | Focus | Key AI Relevance |
|---|---|---|
| **CC1: Control Environment** | Organizational governance and culture | AI governance policies; accountability structures |
| **CC2: Communication and Information** | Information flows and reporting | AI system documentation; incident communication |
| **CC3: Risk Assessment** | Identifying and analyzing risks | AI-specific risk assessment methodology |
| **CC4: Monitoring Activities** | Ongoing assessment of controls | AI system monitoring; drift detection |
| **CC5: Control Activities** | Policies and procedures that mitigate risk | AI deployment controls; change management |
| **CC6: Logical and Physical Access** | Access to systems and data | Access to AI systems, models, and training data |
| **CC7: System Operations** | Detection and response to security events | AI anomaly detection; incident response |
| **CC8: Change Management** | Changes to infrastructure and software | AI model updates; deployment pipeline controls |
| **CC9: Risk Mitigation** | Managing vendor and business risks | Third-party AI API risk management |

### Critical Security Controls for AI Systems

**CC3: Risk Assessment for AI**

Traditional risk assessment processes were designed for deterministic software. AI systems require additional risk categories:

- Model accuracy risk (what happens when the model is wrong?)
- Bias and fairness risk (does the model treat customers inequitably?)
- Adversarial attack risk (can the model be manipulated to produce harmful outputs?)
- Training data risk (does training data contain sensitive information that could be extracted?)
- Drift risk (does model behavior change over time in uncontrolled ways?)

**Document your AI-specific risk assessment methodology.** Auditors will ask how you identify and manage AI risks that don't exist in traditional software.

---

**CC6: Access Controls for AI Systems**

AI systems introduce new access control challenges:

| Access Control Area | AI-Specific Requirements |
|---|---|
| **Model access** | Who can query the model? Who can modify it? |
| **Training data access** | Who can access data used to train models? |
| **Model weights** | For proprietary models — who can access, copy, or export weights? |
| **Prompt logs** | Who can access conversation logs or prompt/response pairs? |
| **API keys** | How are AI service API keys managed and rotated? |
| **Vector databases** | Who can access embedded representations of customer data? |
| **Fine-tuning pipelines** | Who can initiate model fine-tuning jobs? |

---

**CC7: System Operations and AI Monitoring**

SOC 2 requires mechanisms to detect and respond to security events. For AI systems this extends to:

- Detecting anomalous model outputs (outputs that deviate significantly from baseline behavior)
- Detecting prompt injection attempts
- Detecting unauthorized attempts to extract training data
- Monitoring API usage for unusual patterns
- Alerting on access to AI systems outside normal parameters

**Auditors will sample your monitoring logs.** You need evidence that monitoring is operational and that alerts are investigated and resolved.

---

**CC8: Change Management for AI**

AI change management is more complex than traditional software because:

- Model updates can change behavior in unpredictable ways
- Training data changes affect all subsequent model outputs
- Prompt changes can significantly alter system behavior
- A/B testing in AI creates parallel control environments

**Your change management process for AI must cover:**
- Model version control (tracking which model version is in production)
- Pre-deployment testing requirements for model updates
- Rollback procedures for model updates that cause incidents
- Documentation of training data changes
- Approval requirements for production model changes
- Separate controls for prompt changes vs. model changes

---

**CC9: Vendor Risk for AI APIs**

Most AI companies rely on third-party AI APIs (OpenAI, Anthropic, Google, etc.). These are sub-service organizations under SOC 2, and your report must address how you manage their risk.

**What auditors look for:**
- Evidence of vendor assessment before integration
- Contractual protections (data processing agreements, security requirements)
- Monitoring of vendor security posture (reviewing their SOC 2 reports)
- Procedures for vendor incidents (what do you do if your AI API has a breach?)
- Business continuity planning for vendor unavailability

---

## Section 6: Availability (A1) — AI System Uptime and Resilience

The Availability category addresses whether your system is available for operation and use as committed.

### What A1 Requires

| Criterion | What It Covers | AI Relevance |
|---|---|---|
| **A1.1** | Performance monitoring to detect availability issues | AI system latency and throughput monitoring |
| **A1.2** | Environmental protections for infrastructure | Redundancy for AI inference infrastructure |
| **A1.3** | Recovery and continuity procedures | Failover for AI systems; model availability SLAs |

### AI-Specific Availability Challenges

**AI systems are not just on/off.** Availability for AI includes:

- **Model availability:** Is the AI model responding to requests?
- **Quality availability:** Is the model responding *correctly*? A model that returns outputs but hallucinates at 50% rates is not meaningfully available.
- **Performance availability:** Is the model responding within acceptable latency for the use case?
- **Feature availability:** Are all AI-powered features operational, or is degraded mode active?

**Defining your availability commitment for AI:**

Traditional SLAs define uptime percentages. For AI systems, your availability commitment should also address:

- Maximum acceptable inference latency (e.g., P99 < 2 seconds)
- Acceptable model error rates (e.g., <1% error rate on standardized benchmark)
- Degraded mode behavior (what happens when the primary model is unavailable?)
- Planned maintenance procedures for model updates

**Document these commitments in your system description.** Auditors will test whether you monitor against them and respond when they are breached.

---

## Section 7: Processing Integrity (PI) — AI Accuracy and Reliability

Processing Integrity addresses whether your system processes data completely, accurately, timely, and in an authorized manner. For AI systems, this is the most technically complex Trust Service Category.

### What PI Requires

| Criterion | What It Covers |
|---|---|
| **PI1.1** | Procedures to prevent, detect, and correct processing errors |
| **PI1.2** | System inputs are complete and accurate |
| **PI1.3** | Outputs are complete, accurate, and timely |

### Why PI Is Uniquely Challenging for AI

Traditional software processes data deterministically — given the same input, it produces the same output. AI systems are probabilistic. The same input can produce different outputs. This fundamental difference makes traditional processing integrity controls insufficient.

**The core PI challenge for AI:** How do you define and demonstrate "processing integrity" for a system that is inherently probabilistic?

**The answer:** You demonstrate processing integrity for AI through:

1. **Defined accuracy thresholds** — What performance level constitutes "correct" processing for your use case?
2. **Systematic evaluation** — Regular testing against defined benchmarks
3. **Monitoring** — Detecting when production performance deviates from benchmarks
4. **Error handling** — Mechanisms to detect, flag, and handle low-confidence outputs
5. **Human oversight** — For high-stakes processing, human review of AI outputs

### Practical PI Controls for AI Systems

**Input validation:**
- Validate that inputs are within the expected distribution for the model
- Flag inputs that are likely to produce unreliable outputs (out-of-distribution detection)
- Reject or escalate inputs that violate defined safety or appropriateness criteria

**Output validation:**
- Confidence thresholds — flag or reject outputs below a defined confidence level
- Output format validation — ensure outputs conform to expected structure
- Factual consistency checks — for factual claims, verify against authoritative sources where possible
- Safety filtering — check outputs against defined prohibited content criteria

**Monitoring:**
- Track accuracy metrics against baseline in production
- Alert when accuracy metrics deviate beyond defined thresholds
- Monitor for distribution shift in inputs (leading indicator of degraded accuracy)
- Track human override rates (high override rates signal accuracy problems)

**Documentation:**
- Document your accuracy benchmarks and evaluation methodology
- Maintain evaluation results for each model version
- Document how you determine acceptable accuracy thresholds for each use case

**Auditors will test your processing integrity controls by:**
- Reviewing your accuracy benchmarks and evaluation methodology
- Sampling monitoring logs for evidence of ongoing accuracy measurement
- Reviewing incidents where accuracy failures occurred and how they were handled
- Assessing whether your outputs include appropriate confidence or uncertainty information

---

## Section 8: Confidentiality (C) — Protecting Customer Data in AI Systems

The Confidentiality category addresses whether information designated as confidential is protected as committed.

### What C Requires

| Criterion | What It Covers |
|---|---|
| **C1.1** | Confidential information identified and protected during collection and input |
| **C1.2** | Confidential information protected during processing |
| **C1.3** | Confidential information protected for disposal |

### AI-Specific Confidentiality Challenges

AI systems create confidentiality risks that traditional software does not:

**Training data confidentiality:**
If customer data is used to train or fine-tune AI models, that data is embedded in the model weights. Model inversion attacks can sometimes extract training data from model weights. Your confidentiality controls must address how customer data used in training is protected — and whether customers have consented to this use.

**Prompt and context confidentiality:**
In RAG systems and multi-tenant AI applications, prompts from one customer may contain information about that customer's business that must not be disclosed to other customers. Isolation between customer contexts is a confidentiality control.

**Output confidentiality:**
AI models can sometimes infer or generate information about one customer based on patterns learned from other customers' data. This is a subtle but real confidentiality risk in multi-tenant AI deployments.

**API and log confidentiality:**
Prompts and responses sent to and from AI APIs are often logged. These logs may contain confidential customer information. Access controls on logs, log retention policies, and log encryption are confidentiality controls.

### Practical Confidentiality Controls for AI Systems

| Control | What It Does |
|---|---|
| **Customer data isolation** | Ensure AI processing for one customer cannot access or be influenced by another customer's data |
| **Training data consent and controls** | Define whether customer data can be used for training; obtain consent; implement technical controls |
| **Output filtering** | Scan AI outputs for confidential information before returning to users |
| **Log encryption and access control** | Encrypt AI prompt/response logs; restrict access to authorized personnel only |
| **Retention and deletion** | Define retention periods for AI inputs, outputs, and logs; enforce deletion |
| **Subprocessor controls** | Ensure AI API vendors contractually protect confidential information |

---

## Section 9: Privacy (P) — Personal Information in AI Pipelines

The Privacy category addresses whether personal information is collected, used, retained, disclosed, and disposed of in accordance with your privacy notice and applicable requirements.

### What P Requires

The Privacy criteria map to the AICPA Generally Accepted Privacy Principles (GAPP):

| Criterion | Focus |
|---|---|
| **P1** | Notice — individuals informed about privacy practices |
| **P2** | Choice and consent — individuals can choose how their data is used |
| **P3** | Collection — data collected only as needed |
| **P4** | Use, retention, disposal — data used and retained per commitments |
| **P5** | Access — individuals can review and correct their data |
| **P6** | Disclosure and notification — data shared only per commitments; breaches disclosed |
| **P7** | Quality — data is accurate and complete |
| **P8** | Monitoring and enforcement — privacy practices are monitored and enforced |

### AI-Specific Privacy Challenges

**Unintentional personal data collection:**
AI systems can collect personal data that was not anticipated when privacy notices were written. A customer service AI may capture personal health information, financial details, or other sensitive personal data through natural conversation. Your privacy notice must account for the range of personal data AI systems may collect.

**Personal data in model training:**
If your AI system uses customer interactions to improve models, personal data may be used in training. This use must be disclosed in your privacy notice and appropriate consent obtained.

**AI-generated personal data:**
AI systems can generate content that constitutes personal data — generated summaries of individuals, inferences about personal characteristics, or other AI-derived personal data. Privacy obligations extend to AI-generated personal data about individuals.

**Automated decision-making:**
If your AI system makes decisions that significantly affect individuals, privacy obligations around automated decision-making apply (including GDPR Article 22 where relevant).

### Practical Privacy Controls for AI Systems

- Document all personal data flows through AI systems in your privacy notice
- Obtain appropriate consent for use of personal data in AI training
- Implement PII detection to identify when personal data enters AI pipelines
- Build data subject rights fulfillment into AI systems (access, deletion, correction)
- Monitor AI outputs for unexpected personal data disclosure
- Define retention periods for personal data in AI systems and enforce them

---

## Section 10: AI-Specific Control Domains

Beyond the five Trust Service Categories, AI systems require controls in domains that SOC 2 does not fully address but that sophisticated enterprise customers and auditors are increasingly expecting.

### Domain 1: Model Governance

Controls over the AI models themselves — not just the infrastructure they run on:

| Control | Description |
|---|---|
| **Model inventory** | Registry of all AI models in production (name, version, purpose, owner) |
| **Model version control** | Source control for model weights and configurations |
| **Model deployment approval** | Formal approval process before new model versions go to production |
| **Model performance benchmarks** | Defined accuracy and fairness thresholds that models must meet |
| **Model retirement** | Process for decommissioning models and managing their data |

### Domain 2: Prompt and Output Controls

Controls over AI inputs and outputs:

| Control | Description |
|---|---|
| **Prompt injection detection** | Monitoring for attempts to manipulate model behavior through adversarial inputs |
| **Output safety filtering** | Automated scanning of AI outputs for prohibited content |
| **PII detection in outputs** | Scanning AI outputs for personal information before returning to users |
| **Secret detection in outputs** | Scanning AI outputs for API keys, credentials, or sensitive technical information |
| **Output logging** | Tamper-evident logs of AI inputs and outputs for audit purposes |

### Domain 3: AI Training Data Controls

Controls over data used to train or fine-tune AI models:

| Control | Description |
|---|---|
| **Training data inventory** | Documentation of data sources used for training |
| **Training data quality** | Validation that training data meets defined quality standards |
| **Bias testing** | Evaluation of training data for demographic bias |
| **Data provenance** | Records of where training data came from and how it was licensed |
| **Customer data consent** | Controls ensuring customer data is only used for training with appropriate consent |

### Domain 4: AI Incident Management

AI-specific incident categories and response procedures:

| Incident Type | Response Requirements |
|---|---|
| **Model accuracy failure** | Threshold breach triggers investigation; rollback procedures |
| **Bias or fairness incident** | Escalation to compliance; affected customer notification |
| **Prompt injection attack** | Security investigation; model behavior review |
| **Training data exposure** | Privacy breach procedures; regulatory notification where required |
| **Hallucination causing harm** | Customer notification; root cause analysis; model review |
| **API key exposure in outputs** | Immediate key rotation; affected customer notification |

---

## Section 11: The SOC 2 Audit Process

Understanding the audit process helps you prepare effectively.

### Step 1: Readiness Assessment (1–2 months)

Before engaging an auditor, assess your control environment honestly:

- Map your controls to the Trust Service Criteria
- Identify gaps between current state and required controls
- Prioritize and implement missing controls
- Document all controls with evidence procedures

**Common readiness gaps for AI companies:**
- No formal AI risk assessment process
- No model change management controls
- No documented accuracy benchmarks or testing procedures
- No vendor risk management for AI APIs
- Incomplete access controls for AI systems and training data
- No incident response procedures specific to AI failures

---

### Step 2: Evidence Collection Infrastructure

SOC 2 auditors test your controls by examining evidence. For Type II, this evidence must span the entire audit period. You need systems that generate and retain evidence automatically.

**Evidence types auditors collect:**

| Evidence Type | Examples for AI Systems |
|---|---|
| **Policy documents** | AI policy, change management policy, access control policy |
| **Configuration evidence** | Screenshots or exports showing security configurations |
| **Access control evidence** | User access lists, access review records, access change logs |
| **Monitoring evidence** | Alert logs, monitoring dashboards, incident tickets |
| **Testing evidence** | Model accuracy test results, security scan results |
| **Approval records** | Change approval tickets, deployment records |
| **Training records** | Evidence that staff completed required training |
| **Vendor documentation** | Third-party SOC 2 reports, vendor assessment records |

---

### Step 3: System Description

Your SOC 2 report includes a **System Description** — a written description of your system, services, and control environment. This is your responsibility, not the auditor's.

**For AI systems, your system description must address:**
- The AI capabilities of your system (what AI does, how it works at a high level)
- AI-specific risks and how they are managed
- Third-party AI services used and how they are governed
- Subservice organization (vendor) carved-in or carved-out treatment

---

### Step 4: Type I Audit

The auditor reviews your documentation and evidence to assess whether controls are suitably designed. For AI systems:

- **Expect questions about:** How you govern AI model changes, how you test AI accuracy, how you manage AI vendor risk, how you detect AI-specific security events
- **Have ready:** AI risk assessment documentation, model inventory, change management procedures, vendor assessment records

---

### Step 5: Type II Observation Period (6–12 months)

During the observation period, your controls must operate consistently. For AI systems:

- Run accuracy benchmarks on schedule — every test must be documented
- Review access controls on schedule — every review must be documented
- Investigate every monitoring alert — every investigation must be documented
- Apply change management to every model update — every approval must be documented
- Conduct vendor reviews on schedule — every review must be documented

**Evidence gaps during the observation period become audit findings.** Consistency is more important than perfection.

---

### Step 6: Type II Audit

The auditor tests your controls by sampling evidence from across the observation period. They will:

- Select a sample of model deployments and test whether change management was followed
- Select a sample of access reviews and test whether they were completed
- Select a sample of monitoring alerts and test whether they were investigated
- Select a sample of vendor reviews and test whether they were completed
- Review any incidents that occurred during the period

**Exceptions** (control failures) are documented in the report but do not automatically disqualify you from a clean opinion — if exceptions are isolated and remediated, auditors can still issue an unqualified opinion.

---

## Section 12: Third-Party AI APIs and the Supply Chain

For most AI companies, third-party AI APIs are the highest-risk element of the SOC 2 supply chain. Managing this risk correctly is one of the most important things you can do for your SOC 2 program.

### How SOC 2 Treats Sub-Service Organizations

When you rely on a vendor (sub-service organization) to perform part of your service, SOC 2 requires you to address that reliance in your report. You have two options:

**Carve-out method:** You exclude the sub-service organization from your system description. Your report addresses only your own controls. Customers who want assurance about the sub-service organization must obtain their own report.

**Inclusive method:** You include the sub-service organization in your system description and your report covers controls at both organizations.

**For AI APIs, carve-out is typically used** — you cannot include OpenAI or Anthropic in your SOC 2 report. But carve-out requires you to:

1. Obtain and review the sub-service organization's SOC 2 report annually
2. Assess whether their controls adequately support your control environment
3. Document complementary user entity controls (things you do to compensate for reliance on them)
4. Include the sub-service organization in your system description with carve-out disclosure

### AI API Vendor Assessment Framework

Before integrating any AI API with customer data:

| Assessment Area | Questions to Answer |
|---|---|
| **Security posture** | Do they have a SOC 2 report? What is their security certification? |
| **Data handling** | How do they handle data sent to their API? Do they train on it? |
| **Contractual protections** | Will they sign a data processing agreement? BAA (if needed)? |
| **Availability** | What is their SLA? What happens when they are unavailable? |
| **Incident notification** | How quickly do they notify customers of security incidents? |
| **Sub-processors** | Who do they use, and are those sub-processors assessed? |
| **Data residency** | Where is data processed? Does this create regulatory issues? |

### When an AI API Vendor Has No SOC 2 Report

Some AI API vendors — particularly newer or smaller providers — may not yet have SOC 2 reports. In this situation:

- Document the absence of a SOC 2 report and your assessment of compensating controls
- Assess available security documentation (security whitepapers, penetration test summaries, bug bounty programs)
- Implement additional compensating controls on your end (output scanning, access restrictions, monitoring)
- Consider whether the risk of using an unaudited vendor is acceptable given the sensitivity of data involved
- Disclose the situation to your auditor transparently

---

## Section 13: Common Control Gaps in AI Systems

These are the most common control gaps auditors find when assessing AI companies for SOC 2.

### Gap 1: No Formal AI Risk Assessment

**What auditors find:** Risk assessments cover infrastructure and application security but have no AI-specific risk categories (accuracy, bias, adversarial attacks, training data risks).

**Fix:** Add AI-specific risk categories to your risk assessment methodology. Document risks for each AI system in production.

---

### Gap 2: Change Management Doesn't Cover AI Models

**What auditors find:** Change management policies and procedures cover code and infrastructure but don't explicitly address AI model updates, prompt changes, or training data changes.

**Fix:** Explicitly extend your change management policy to cover AI model versions, prompts, and training data. Require approval and testing before production model changes.

---

### Gap 3: No Accuracy Benchmarks or Testing Records

**What auditors find:** No documented accuracy thresholds or evaluation methodology. No records of accuracy testing for model versions in production.

**Fix:** Define accuracy benchmarks for each AI system. Run evaluations before each deployment. Keep records of evaluation results.

---

### Gap 4: Incomplete Access Controls for AI Infrastructure

**What auditors find:** Access controls cover application and database tiers but don't address AI-specific assets — model weights, vector databases, fine-tuning pipelines, prompt logs.

**Fix:** Extend your access control inventory to cover all AI-specific assets. Apply least-privilege access. Review access quarterly.

---

### Gap 5: No Vendor Risk Management for AI APIs

**What auditors find:** Vendor assessment program covers traditional software vendors but AI API providers are not assessed. No evidence of reviewing AI vendor SOC 2 reports.

**Fix:** Add AI API providers to your vendor assessment program. Obtain and review their SOC 2 reports annually. Document complementary user entity controls.

---

### Gap 6: No AI-Specific Incident Procedures

**What auditors find:** Incident response procedures cover security incidents (breaches, outages) but have no playbooks for AI-specific incidents (accuracy failures, hallucinations causing harm, bias incidents).

**Fix:** Add AI-specific incident categories and response procedures to your incident response plan. Train staff on AI incident identification and escalation.

---

### Gap 7: Monitoring Gaps in AI Pipelines

**What auditors find:** Infrastructure monitoring is comprehensive, but AI pipeline monitoring is absent or inconsistent. No evidence that AI system behavior is monitored for anomalies.

**Fix:** Implement AI-specific monitoring: model accuracy metrics, output anomaly detection, prompt injection detection, drift alerts. Ensure monitoring generates documented alerts that are investigated.

---

### Gap 8: Training Data Not Documented

**What auditors find:** For AI companies that train or fine-tune models, training data sources are not documented. No evidence of training data quality review or bias testing.

**Fix:** Document all training data sources, collection methods, and quality validation. Maintain records of bias testing. Document customer data consent for use in training.

---

## Section 14: How SOC 2 Connects to Other Frameworks

SOC 2 is designed to be complementary with other governance frameworks. If you have implemented other guides in this series, much of the work is already done.

### SOC 2 and EU AI Act

| SOC 2 Criteria | EU AI Act Requirement |
|---|---|
| CC3 (Risk Assessment) | Article 9 (Risk management system) |
| CC7 (System Operations / Monitoring) | Article 9 (Post-market monitoring) |
| CC8 (Change Management) | Article 11 (Technical documentation) |
| PI (Processing Integrity) | Article 15 (Accuracy, robustness) |
| C (Confidentiality) | Article 10 (Data governance) |

---

### SOC 2 and ISO 42001

| SOC 2 Criteria | ISO 42001 Clause |
|---|---|
| CC1 (Control Environment) | Clause 5 (Leadership) |
| CC3 (Risk Assessment) | Clause 6.1 (Risk assessment) |
| CC4 (Monitoring) | Clause 9 (Performance evaluation) |
| CC8 (Change Management) | Clause 8 (Operational controls) |
| CC9 (Vendor Risk) | Annex A.10 (Third-party relationships) |

**Strategic insight:** Organizations with ISO 42001 in place have most of the SOC 2 documentation infrastructure already built. SOC 2 adds the audit attestation layer on top.

---

### SOC 2 and NIST AI RMF

| SOC 2 Criteria | NIST AI RMF Function |
|---|---|
| CC1–CC2 (Governance) | GOVERN |
| CC3, CC9 (Risk) | MAP |
| CC4 (Monitoring) | MEASURE |
| CC5–CC8 (Controls) | MANAGE |

---

### SOC 2 and GDPR/HIPAA

| SOC 2 Category | Privacy Regulation |
|---|---|
| Privacy (P) | GDPR privacy principles; HIPAA Privacy Rule |
| Security (CC6, CC7) | GDPR Article 32; HIPAA Security Rule |
| Confidentiality (C) | GDPR data minimization; HIPAA minimum necessary |
| Availability (A1) | HIPAA contingency planning |

---

## Section 15: Compliance Readiness Assessment

**SOC 2 compliance is ongoing — Type II requires consistent control operation every day.**

### Security (CC) Readiness Checklist

- [ ] AI risk assessment includes AI-specific risk categories
- [ ] Access controls documented for all AI-specific assets (models, training data, logs, APIs)
- [ ] Quarterly access reviews scheduled and documented
- [ ] Change management process covers AI model updates and prompt changes
- [ ] AI API vendors assessed and SOC 2 reports obtained
- [ ] AI-specific monitoring operational (accuracy, drift, anomaly detection)
- [ ] AI incident response procedures documented and tested
- [ ] Security training includes AI-specific threats

### Availability (A1) Readiness Checklist

- [ ] AI system availability commitments documented
- [ ] AI system uptime and latency monitored
- [ ] Failover and redundancy for AI inference infrastructure
- [ ] Incident response for AI availability failures documented
- [ ] Recovery time objectives defined and tested

### Processing Integrity (PI) Readiness Checklist

- [ ] Accuracy benchmarks defined for each AI system
- [ ] Pre-deployment evaluation methodology documented
- [ ] Evaluation results maintained for each model version
- [ ] Production accuracy monitoring operational
- [ ] Confidence thresholds and escalation procedures in place
- [ ] Human oversight procedures for low-confidence outputs

### Confidentiality (C) Readiness Checklist

- [ ] Customer data isolation controls for multi-tenant AI systems
- [ ] Training data consent and controls documented
- [ ] AI output filtering for confidential information
- [ ] Log encryption and access controls in place
- [ ] Retention and deletion policies for AI data

### Privacy (P) Readiness Checklist

- [ ] Privacy notice covers AI data collection and use
- [ ] PII detection operational in AI pipelines
- [ ] Data subject rights fulfillment process includes AI systems
- [ ] AI training data use disclosed and consented
- [ ] Personal data retention and deletion enforced in AI systems

### What an SOC 2 Auditor Would Ask

1. "Show me your AI risk assessment and how it covers AI-specific risks."
2. "Show me your change management records for the last three model deployments."
3. "Show me your accuracy benchmarks and the test results for the current production model."
4. "Show me your most recent access review for AI systems."
5. "Show me the SOC 2 reports you obtained from your AI API vendors."
6. "Show me your monitoring logs and how you investigate AI-specific alerts."
7. "Show me an AI incident from the audit period and how you responded."
8. "Show me how you prevent one customer's data from being exposed in another customer's AI outputs."

**If you can answer all 8 with documented evidence from the audit period, you are well-positioned for a clean SOC 2 opinion.**

---

## SpanForge SDK: Implementing SOC 2 Controls

The SpanForge SDK provides the access logging, audit evidence, and continuous monitoring infrastructure that SOC 2 Type II requires. The `ComplianceMappingEngine` maps your AI telemetry to Trust Services Criteria, generating the evidence packages your auditors need to issue a clean opinion.

### Trust Services Criteria-to-SDK Mapping

| SOC 2 Criteria | Requirement | SpanForge Capability | Event Types |
|----------------|-------------|---------------------|-------------|
| CC6.1 — Logical Access Controls | AI model access logging and governance | `sf-audit`, HMAC audit chains, Model Registry | `llm.audit.*`, `llm.trace.*`, `model_registry.*` |
| CC6.6 — Encryption at Rest | Data encryption and key management | AES-256-GCM, envelope encryption via cloud KMS | — |
| CC7.2 — System Monitoring | Continuous monitoring and alerting | `sf-alert` (Slack, PagerDuty, OpsGenie, VictorOps), `sf-observe` | All event types |
| CC8.1 — Change Management | AI model lifecycle governance | `model_registry.registered`, `model_registry.deprecated`, `model_registry.retired` | `model_registry.*` |
| CC9.2 — Third-Party Risk | AI vendor governance | Enterprise Integrations (OpenAI, Anthropic, Azure OpenAI, LangChain) | `llm.trace.*`, `llm.audit.*` |
| A1.2 — Availability | System availability monitoring | EventStream, health probes, export backends | All event types |

### Generating Your SOC 2 Evidence Package

```python
from spanforge.core.compliance_mapping import ComplianceMappingEngine

engine = ComplianceMappingEngine()
package = engine.generate_evidence_package(
    model_id="your-model-id",
    framework="soc2",
    from_date="2026-01-01",
    to_date="2026-03-31",
)

print(package.gap_report)     # criteria-by-criteria coverage gaps
print(package.attestation)    # HMAC-signed attestation for auditors
```

Or via CLI:

```bash
spanforge compliance generate \
  --model-id your-model-id \
  --framework soc2 \
  --from 2026-01-01 \
  --to 2026-03-31
```

### Key SDK Features for SOC 2 Compliance

- **Tamper-Evident Audit Trail** — Every AI model call generates HMAC-signed `llm.audit.*` events; alter one event and the entire chain breaks — exactly what CC6.1 requires
- **Continuous Monitoring** — `sf-alert` routes anomalies to 9 sinks (Slack, Teams, PagerDuty, OpsGenie, VictorOps, Incident.io, SMS, Webhook) with deduplication and rate limiting
- **Model Change Management** — Model Registry lifecycle events (`registered`, `deprecated`, `retired`) provide the change management evidence CC8.1 requires
- **Multi-Tenant Isolation** — `verify_tenant_isolation()` verifies that customer data is strictly separated — critical for CC6.1 in multi-tenant SaaS environments
- **SIEM Integration** — `spanforge export siem` streams CEF or LEEF lines to any SIEM for audit period evidence collection

> **SDK Reference:** [Compliance & Tenant Isolation](/docs/guide/compliance) · [Alert Routing](/docs/guide/alert) · [Evidence Export](/docs/evidence-export)

---

## Section 16: Getting Started

SOC 2 is the most process-intensive compliance framework in this series because it requires not just good controls, but consistent evidence of those controls operating over time.

Your specific situation is more complex than this guide can address because:

- **Your AI systems are unique.** The controls you need depend on what your AI does, how it processes customer data, and what risks it presents.
- **Your customer requirements are unique.** Which Trust Service Categories you need depends on your customer base and their security expectations.
- **Your existing controls are unique.** How much work SOC 2 requires depends on your current security posture.
- **Your timeline is unique.** When you need SOC 2 (due to a deal or customer requirement) determines how aggressive your implementation needs to be.

### What You Need to Build SOC 2-Ready AI

To move from "I understand SOC 2" to "we have a clean SOC 2 report covering our AI systems," you need:

1. **Assessment:** What are your current control gaps against the Trust Service Criteria for AI?
2. **Custom approach:** What controls do you need for YOUR AI systems and customer commitments?
3. **Implementation support:** How do you build the monitoring, access controls, and documentation required?
4. **Continuous operation:** How do you maintain consistent control evidence across the audit period?

### Next Step

**Schedule a 30-minute SOC 2 Readiness Assessment.**

During this call, we'll:
- Review your current control environment and AI systems
- Map your controls against the Trust Service Criteria
- Identify your highest-priority gaps
- Create a recommended implementation approach
- Discuss timeline to Type I and Type II readiness

No pressure. No sales pitch. Just expert guidance on building SOC 2-ready AI systems.

---

## Section 17: About SpanForge

**SpanForge helps organizations build governance-ready AI systems.** We provide the governance infrastructure, continuous monitoring, and operational compliance workflows needed to achieve and maintain SOC 2 attestation, implement ISO 42001, and satisfy EU AI Act, GDPR, HIPAA, and NIST AI RMF requirements — all from a single platform. From readiness assessment through audit preparation and beyond, we help you build the evidence trail that makes SOC 2 audits fast and clean.

---

## Section 18: Resources & Next Steps

### What's Included in This Guide

- [x] SOC 2 framework overview and Type I vs. Type II distinction
- [x] All five Trust Service Categories with AI-specific controls
- [x] Security criteria (CC) in full detail for AI systems
- [x] Processing Integrity controls for probabilistic AI systems
- [x] Confidentiality and Privacy controls for AI pipelines
- [x] AI-specific control domains (model governance, prompt controls, training data)
- [x] The complete SOC 2 audit process step by step
- [x] Third-party AI API vendor management
- [x] The 8 most common control gaps for AI companies
- [x] Framework integration (EU AI Act, ISO 42001, NIST, GDPR, HIPAA)
- [x] Readiness checklists for all five Trust Service Categories

### What You'll Need Beyond This Guide

- **A qualified CPA firm:** SOC 2 attestation requires an independent CPA firm. This guide cannot substitute for the audit itself.
- **Legal counsel:** For customer contract language, liability considerations, and regulatory intersections
- **Technical implementation support:** For controls specific to your AI architecture and deployment

### This Is the Starting Point

This guide is designed to:
- **Build awareness** of what SOC 2 requires for AI systems
- **Show you what controls are needed** for a clean SOC 2 opinion
- **Help you assess your current state** against the Trust Service Criteria
- **Demonstrate the scope** of work required for Type I and Type II readiness

It is not designed to replace the audit process. That requires an independent CPA firm and the actual examination of your controls.

### Schedule Your Free Assessment

Ready to understand your SOC 2 readiness?

**[Schedule a 30-minute SOC 2 Readiness Assessment →](#contact)**

We'll help you understand:
- Your current control gaps against the Trust Service Criteria
- What's needed to achieve Type I and Type II readiness
- Recommended implementation approach and timeline
- How to connect your SOC 2 program to your other compliance obligations

---

## Contact {#contact}

### Schedule Your 30-Minute SOC 2 Readiness Assessment

**→ [sriram@getspanforge.com](mailto:sriram@getspanforge.com)**

We'll help you build SOC 2-ready AI systems designed to:
- Build systems designed to support a clean SOC 2 Type II opinion
- Satisfy enterprise procurement requirements
- Generate consistent audit evidence automatically
- Connect to your broader AI governance program

---

## Disclaimer

**This is an educational guide, not legal or audit advice.**

SOC 2 attestation requires an independent examination by a qualified CPA firm. This guide provides educational context about the SOC 2 framework and AI-specific control considerations — it does not constitute audit advice, legal advice, or a guarantee of SOC 2 compliance.

SOC 2 requirements depend on:
- Which Trust Service Categories you include in your examination
- Your specific system description and service commitments
- The judgment of your independent auditor
- Customer-specific requirements that may exceed standard criteria

**For formal SOC 2 attestation, engage a qualified CPA firm with experience in technology and AI systems.**

This guide reflects current understanding as of May 2026. AICPA continues to develop guidance on AI-specific considerations within the Trust Service Criteria framework.

---

*SOC 2 Compliance Roadmap for AI Teams 2026*
*Building Audit-Ready AI Systems for Enterprise Trust*
*Brought to you by SpanForge*
*May 2026*
