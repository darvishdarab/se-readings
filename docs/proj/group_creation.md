---
id: group_creation
title: ' '
---

# Group Registration



:::caution Caution 1
Only do this form if your team members are finazlied. 
:::

:::caution Caution 2
Do NOT submit this form multiple times.
:::

:::caution Caution 3
In order for this to work properly, all entered github user names should already be a member of `jhu-oose` Github organization. If you are not, do [Github Onboarding form](docs/onboarding) first.
:::


:::tip
If you run into problems, send a private message on Piazza. Include all the information from the form below.
:::

:::info
After you register your group, the group members are invited to a GitHub Team, which grants you access to your group's repository. You’ll use this repository throughout the course to submit iterations, receive reviews, communicate with your advisor, and so forth.
:::


You must register your group using the form below:

<form method="POST" action="https://roboose.herokuapp.com/roboose/groups">
<fieldset markdown="1">

<legend>Group Registration</legend>

<label>
<strong>Group Identifier: </strong>
<input type="text" name="identifier" required pattern="[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]" />  
</label>
<small>
<br />
This must be a valid GitHub identifier: it may only contain alphanumeric characters or single hyphens, and cannot begin or end with a hyphen.  
Don’t include an `@` sign at the beginning—this isn’t a mention.  
You may choose an identifier related to your project if you already decided on one. Or you may just choose a name for your group, for example, `power-oosers`.
</small>
<br />
<br />
<label>
<strong>Group Members GitHub Identifiers:</strong>  
</label>
<br />
<label>
Member #1 Gihub username: <input type="text" name="members[]" required pattern="[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]" />  
</label>
<br />
<label>
Member #2 Gihub username: <input type="text" name="members[]" required pattern="[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]" />
</label>
<br />
<label>
Member #3 Gihub username: <input type="text" name="members[]" required pattern="[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]" />
</label>
<br />
<label>
Member #4 Gihub username: <input type="text" name="members[]" required pattern="[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]" />
</label>
<br />
<label>
Member #5 Gihub username: <input type="text" name="members[]" pattern="[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]" />
</label>
<br />
<label> 
Member #6 Gihub username: <input type="text" name="members[]" placeholder="(Optional)" pattern="[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]" /> 
</label> 
<br />
<small>
These must be the GitHub identifiers of registered students.  
Don’t include an `@` sign at the beginning—this isn’t a mention.  
GitHub identifiers **do not** start with `2020-student-fall-`.  
Groups must have 5 or 6 members, unless you have an approval from the instructor.  
</small>
<br />
<br />
<label>
	<button>Register</button>
</label>

</fieldset>
</form>
<br />
<br />

