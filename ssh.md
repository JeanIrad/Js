# switching from https to ssh

git remote set-url origin git@github.com:JeanIrad/Js.git


## creating ssh key

ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
# start the ssh-agent in the background
Get-Service -Name ssh-agent | Set-Service -StartupType Manual
Start-Service ssh-agent


## chaking passphrase of ssh key

$ssh-keygen -p -f ~/.ssh/id_rsa
> Enter old passphrase: [Type old passphrase]
> Key has comment 'your_email@example.com'
> Enter new passphrase (empty for no passphrase): [Type new passphrase]
> Enter same passphrase again: [Repeat the new passphrase]
> Your identification has been saved with the new passphrase.