# Introduction and acknolwedgements

This extension shows everyone in a Google Meet - based almost entirely on [Chris Gamble's Userscript](https://greasyfork.org/en/scripts/397862-google-meet-grid-view), just packaged as a proper Chrome Extension so that we can push it via GAdmin to our faculty and students. 

No data is stored by the extension, it's a purely cosmetic script. No extra permissions are required except access to meet.google.com. You can view all source code on the [public repository](https://github.com/stgeorgesepiscopal/google-meet-grid-view-extension).

Please understand that I've created this for my school during a crisis, and can't reply to feature requests or support users in any meaningful way. If it's useful to you, however, I'm really glad! 

If you feel both grateful and generous, feel free to visit our [school's donation page](https://www.stgnola.org/giving/make-a-donation) and make a gift using the form on the left side of the page. This is a very trying time for our school, and I'm proud to say we're doing the right thing by paying all of our hourly wage-earners, even though they can't come into work and we don't have the revenue we typically would to do it with. So every little bit helps! Please use the Designation of "Other: Tech Team Support of StG Community Fund"


# Cloning / building
This repo uses submodules to keep pulling the latest userscript (basically, I'm just injecting his script)

So instead of just `git clone` you'll want to do `git clone -recursive` if you're installing the script locally.

To build the script yourself, just clone the repo, go to the directory and use `zip -r packed.zip src` that will generate the zip file you need to upload to the Chrome Web Store (I think it costs like $5 one time to become a developer on there). Oh, and be sure to adjust the variables in `manifest.json` to reflect your own information.