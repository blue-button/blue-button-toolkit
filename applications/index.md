---
layout: page
---

# Applications

Learn how to build applications powered by Blue Button+ receiving structured patient health records and getting automated access from dataholders.

<!--
1. What data do you want? [content]
2. Where do you get it? [connector api]
3. How do you get it? [transport]
4. What do you do with it, present it? [UI / tools]
-->

{% include bb_plus_app.html %}

<a name="content"></a>
## Content

An electronic health record keeps a digital record of clinical information about a particular individual. With the amount of variability among Health IT systems, it is important to have a consistent set of health information for each patient.

For Blue Button, the recommended standard for representing the patient health record is the [***HL7 Consolidated Clinical Document Architecture***](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=258) also known as the Consolidated CDA.

The Consolidated CDA is a XML-based standard that specifies the encoding, structure, and semantics of a clinical document.

There are a wide-range of templates that can be represented in the Consolidated CDA standard. For Blue Button we are outlining a subset of sections and fields that should be used. 

[***Learn more***](/applications/content)

<a name="transport"></a>
## Transport

[***Transport with Direct***](/applications/direct)
[***Transport with REST***](/applications/rest)

<a name="tools"></a>
## Tools

There are quite a few resources availiable to help help you adopt the different components of Blue Button+.
[***Learn more***](/applications/tools)

<a name="testing"></a>
## Testing

Testing tools, sample data, and community driven issue support related to implementers seeking guidance in meeting certification requirements.
[***Learn more***](/applications/testing)
