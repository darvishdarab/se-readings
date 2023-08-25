---
id: onboarding
title: Homework Onboarding
---

In order to provision you a repository to use for your homeworks from here on, we need this information.

:::info
If you don’t have a GitHub account, [create one now](https://github.com/join). 
:::

:::caution
Don’t submit this form multiple times. Be patient when submitting the form!
:::

:::note
If you run into problems, send a private message on Piazza. Include all the information from the form above.
:::

:::note
After you register, you are invited via email to a repository. This is your individual repository in which you’ll submit the homework.
:::


<form method="POST" action="https://roboose.herokuapp.com/roboose/students">
<fieldset markdown="1">

<label>
<strong>GitHub Identifier: </strong>
<input type="text" name="github" required pattern="[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]" />  
</label>

<br />
For example, jhu-oose-example-student.  
Don’t include an `@` sign at the beginning — this isn’t a mention!  
GitHub identifiers <strong>do not</strong> start with `2020-fall-student-`.  

<br /><br />
<label>
<strong>Hopkins Identifier: </strong>
<input type="text" name="hopkins" required pattern="[0-9A-F]{6}" />  
</label>

<br />
For example, `7B4EF0`.  
This is the 6-character “Hopkins ID” in SIS, <strong>not</strong> your email.


<br /><br />
<button>Register</button>

</fieldset>
</form>

<br />


