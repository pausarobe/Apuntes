![SkyLab Coders](http://www.skylabcoders.com/images/403/default.png "SkyLabCoders")

SkyLab Bootcamp 2017-Sep
========================

# Basic Tools

## Console

Emulators: 

[Comander](http://cmder.net/)

### Useful commands

How to see path to working directory

```bash
$ pwd
```

How to list files in directory

```bash
$ ls
```

How to list files in list mode

```bash
$ ls -l
```

List hidden files

```bash
$ ls -a
```

Combine listing modes (hidden and list mode)

```bash
$ ls -la
```

How to create an empty file

```bash
$ touch <file>
```

How to create a file with content in one command

```bash
$ echo "Hola mundo" > <file>.txt 
```

How to see the content of a text file

```bash
$ cat <file>
```

with less (vim-like)

```bash
$ less <file>  -> para salir :q
```

How to create a directory

```bash
$ mkdir <directory>
```

How to copy a file

```bash
$ cp <from-file> <to-file>
```

How to copy a directory

```bash
$ cp -r <from-directory> <to-directory>
```

How to move a file

```bash
$ mv README.md .. -> mou a la carpeta anterior
$ mv README.md <directory> -> mou a la carpeta que dius
```

How to move or rename a file or directory (empty)

```bash
$ mv <from-file-or-directory> <to-file-or-directory>
```

How to move a directory with content

```bash
$ mv -r <from-directory> <to-directory>
```

How to remove a file

```bash
$ rm <file>
$ rm -r <file> 
```

How to remove a directory

```bash
$ rm -d <directory>
```

How to remove a directory recursively

```bash
$ rm -r <directory>
```

Anar a una carpeta

```bash
$ cd <directory>
```

Anar a la carpeta padre

```bash
$ cd ..
```

Borrar varies carpetes amb un sol comando

```bash
$ rm -rf workspace* -> borra totes amb el mateix nom i un sufix
```


## Markdown

### Emphazises

_italico_ 

**Negrita**

### Links

[Google](http://www.google.com "Goolge!")

URI identificador
URL localizador

### Referencies 

This is [an example][id] reference-style link.
This is [an example][id] reference-style link.

[id]: http://example.com/  "Optional Title Here"

### Tables

<table>
    <tr>
        <td>Hola</td><td>Mundo</td>
    </tr>
</table>

### Code block

<code>This is a code block.</code>

### Lists

1.  Bird
2.  McHale
3.  Parish

* One
* Two
* Three

- A
- B
- C

unordened list
<ul>
    <li>a</li>
    <li>b</li>
    <li>c</li>
</ul>

ordened list
<ol>
    <li>a</li>
    <li>b</li>
    <li>c</li>
</ol>

### Blockquotes

> This is the first level of quoting.
>
> > This is nested blockquote.
>
> Back to the first level.

### Comments

<!-- this is a comment -->



# Git

Init a bare repo ("remote")
```bash
$ git init --bare
```

Init a local repo (to be connected to remote repo)
```bash
$ git init
```

Show state
```bash
$ git status
```

Add file or directory to stage
```bash
$ git add <file-or-directory> -> posa al calaix
```

Remove file or directory from stage
```bash
$ git rm --cached <file-or-directory>
```

Commit the changes in stage
```bash
$ git commit -m "short message that describes the commit" -> ho guarda al general
```

Show all commit
```bash
$ git log -> mires els commit que shan fet
```

Push changes from local to remote repo
```bash
$ git push -u origin master -> pujar, el -u es per marcar el cami la primera vegada
$ git push
```

Pull changes from remote local repo
```bash
$ git pull origin master -> baixar, el origin masteres per marcar el cami la primera vegada
$ git pull
```

Show differences from 
```bash
$ git diff HEAD -> mira les diferencies
$ git diff --staged
```

Back
```bash
$ git checkout -- octocat.txt -> torna al ultim commit que tinguem
```

Delete
```bash
$ git reset octofamily/octodog.txt -> per sortir del checkout on estava
```

New branch
```bash
$ git branch <name_branch> -> crea una branca nova
```

Merge
```bash
$ git merge <name_branch> -> fusiona les dos branques, la que estas amb la < >
```

Delete branch
```bash
git branch -d <name_branch> -> borra la branca
```

Remote
```bash
$ git remote add origin https://github.com/try-git/try_git.git
```
 
 
 
 
# JavaScript

  