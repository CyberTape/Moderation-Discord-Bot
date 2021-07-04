module.exports = { 

name: "help",
code: `$title[Help Menu]
$thumbnail[$userAvatar[$authorID]]
  $description[**- His Prefix on this Server \`$getServerVar[prefix]\` **
**- Use \`$getServerVar[prefix]<NameCommand>\` to execute the Command. **

**⚙ Moderation Command List**

\`$getServerVar[prefix]kick\` - Kicked Someone from server.
\`$getServerVar[prefix]ban\` - Bans a user from the server.
\`$getServerVar[prefix]warn\` - Warns a User.
\`$getServerVar[prefix]checkwarn\` - Check the amount of warns that a user has.
\`$getServerVar[prefix]removewarn\` - Remove a warn from one of the users.
\`$getServerVar[prefix]poll\` - Create a poll.
\`$getServerVar[prefix]clear\` - Delete multiple Messages.
\`$getServerVar[prefix]setprefix\` - Set Custom Prefix In the server.]

$color[RANDOM]
$footer[Dosk1-Bot | Subscribe To OscarDosk1]
$addTimestamp`

}
