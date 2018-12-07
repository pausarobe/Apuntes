![SkyLab Coders](http://www.skylabcoders.com/images/403/default.png "SkyLabCoders")

INDEX
====
1. [Basic Tools](file:///C:/users/pausar~1/appdata/local/temp/19.html#1basic-tools)

    1.1 [Console](file:///C:/users/pausar~1/appdata/local/temp/19.html#11console)
    1.2 [Markdown](file:///C:/users/pausar~1/appdata/local/temp/19.html#12markdown)

2. [Git](file:///C:/users/pausar~1/appdata/local/temp/19.html#2git)
    2.1 [References](file:///C:/users/pausar~1/appdata/local/temp/19.html#21references)

3. [JavaScript](file:///C:/users/pausar~1/appdata/local/temp/19.html#3javascript)
    3.1 [Arrays](file:///C:/users/pausar~1/appdata/local/temp/19.html#31arrays)
    3.2 [Polyfill](file:///C:/users/pausar~1/appdata/local/temp/19.html#32polyfill)
    3.3 [Hoisting](file:///C:/users/pausar~1/appdata/local/temp/19.html#33hoisting)
    3.4 [Call vs Apply](file:///C:/users/pausar~1/appdata/local/temp/19.html#34call-vs-apply)
    3.5 [Prototyping](file:///C:/users/pausar~1/appdata/local/temp/19.html#35prototyping)
    3.6 [Var vs Scope and Block](file:///C:/users/pausar~1/appdata/local/temp/19.html#36var-vs-scope-and-block)

4. [Jasmine](file:///C:/users/pausar~1/appdata/local/temp/19.html#4jasmine)


# 1.Basic Tools

## 1.1.Console 

Emulators: 

[Comander](http://cmder.net/)
[Cygwin](http://cygwin.com)

---

#### 1.1.1.Useful commands

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
  
  
---

---
    


## 1.2.Markdown

---

#### 1.2.1.Emphazises

_italico_  

**Negrita**

---

#### 1.2.2.Links

[Google](http://www.google.com "Goolge!")

URI identificador
URL localizador

---

#### 1.2.3.Referencies 

This is [an example][id] reference-style link.
This is [an example][id] reference-style link.

[id]: http://example.com/  "Optional Title Here"

---

#### 1.2.4.Tables

<table>
    <tr>
        <td>Hola</td><td>Mundo</td>
    </tr>
</table>

---

#### 1.2.5.Code block

<code>This is a code block.</code>

---

#### 1.2.6.Lists

* One
* Two
* Three

- A
- B
- C

<ul>
    <li>a</li>
    <li>b</li>
    <li>c</li>
</ul>

1.  Bird
1.  McHale
3.  Parish

<ol>
    <li>a</li>
    <li>b</li>
    <li>c</li>
</ol>


a. 1
b. 2
c. 3

---

#### 1.2.7.Blockquotes

> This is the first level of quoting.
>
> > This is nested blockquote.
>
> Back to the first level.

---

#### 1.2.8.Comments

```html
<!-- this is a comment -->
```
  
---
  
---
    


# 2.Git

Init a bare repo ("remote", "master")
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

See repo configuration
```bash
$ git config --list
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
 
See remotes
```bash
$ git remote -v
```

Add remote
```bash
$ git remote add upstream <remote url>
```

Bring changes from remote to local repo
```bash
$ git fetch upstream -> semblant al pull, el pull baixa i aplica / el fetch nomes baixa
```

Merge changes from upstream/master to local master (master means branch "master")
```bash
$ git merge upstream/master
```

---

## 2.1.References

[Git - la guía sencilla](http://rogerdudler.github.io/git-guide/index.es.html)

[Configuring a remote for a fork](https://help.github.com/articles/configuring-a-remote-for-a-fork/)

[Syncing a fork](https://help.github.com/articles/syncing-a-fork/)

---

---
    


# 3.JavaScript

---

## 3.1.Arrays

![from f to a boom!](images/from-f-to-a-boom.jpg)

```javascript
function f1() { console.log(1) }
function f2() { console.log(2) }
function f3() { console.log(3) }

var a = [f1, f2, f3];

a.f1(); // err!

a[0].f1(); // err!

a[0](); // correct!

var b = [a];

b.length;

b[0][1](); // f2 in a from b

var c = [{ d: b }];

c.d[0][2](); // f3 in a from c --> but error!

c[0].d[0][2](); // good!

var f = { g: { h: c } };

f.g.h[0].d[0][0](); // f1 in a from f
```

---

#### 3.1.1.Array.prototype.reduce()

```javascript
var cart = [{ item: 'camiseta', price: 10.5 },
            { item: 'jeans', price: 23.95 },
            { item: 'zapatos', price: 45 }];


cart.reduce(function(accum, v) {
   console.log(accum, v)
   return accum + v.price;
}, cart[0].price); // 89.95 wrong!!!! error!!! this store is stealing my money!!! (richy's store)

cart.reduce(function(accum, v) {
   console.log(accum, v)
   return accum + v.price;
}, 0); // 79.45 correct!!!  
```

---

## 3.2.Polyfill

```javascript
Array.prototype.clone = function() { // provides a new function to arrays
    return this.slice(0); // creates a copy of the array
};
```

---

## 3.3.Hoisting

```javascript
function fun() {
    x = 1;
    console.log(x);
    var x;
}

fun(); // prints 1 and x only exists inside fun (despite being declared at the end)
console.log(x); // raises an error, as x is not in a global context.
```

```javascript
function fun() {
    print();

    function print() {
        console.log('hello world');
    }
}

fun(); // prints 'hello world' as print is declared and inside fun
```

---

## 3.4.call vs apply

```javascript
function salute(name, name2) {
    console.log(this.hello + ' ' + name + ', ' + name2);
}

var english = {
    hello: 'hello'
};

var german = {
    hello: 'hallo'
};

var catalan = {
    hello: 'hola'
};

var italian = {
    hello: 'ciao'
};

salute.call(english, 'ana', 'max');
salute.apply(german, ['ana', 'max']);
salute.call(catalan, 'ana', 'max');
salute.apply(italian, ['ana', 'max']);
```

---

## 3.5.Prototyping

```javascript

// Animal

function Animal(species, name) {
    this.species = species;
    this.name = name;
}

Animal.prototype.eat = function() {
    console.log(this.name + ' eating');
};

Animal.prototype.sleep = function() {
    console.log(this.name + ' sleeping');
};

// Lion

function Lion(name) {
    Animal.call(this, 'feline', name);
}

Lion.prototype = new Animal();

Lion.prototype.roar = function() {
    console.log(this.name + ' roaring');
};

// Human

function Human(name) {
    Animal.call(this, 'human', name);
}

Human.prototype = new Animal();

Human.prototype.speak = function() {
    console.log(this.name + ' speaking');
};

// examples

var max = new Human('max');
max.eat();
max.sleep();
max.speak();

var cecil = new Lion('cecil');
cecil.eat();
cecil.sleep();
cecil.roar();
```

---

## 3.6.var vs scope and block

```javascript
function fun() {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }

    console.log('here! ' + i); // WARN! i exists here! ... 10!
}

fun();
```

---

---
    


# 4.Jasmine

[Introduction](https://jasmine.github.io/2.0/introduction.html)

---

---

# 5.HTML5

```html
<div> para bloques.</div>
<span> para elementos en linea.</span>

<address></address>

<HTML> First tag in a document (unpaired).
<HEAD> Marks the head section (paired).
<BODY> Marks the body section (paired).
<TITLE> Title (goes in head section) (paired).
<P> Paragraph break (unpaired).
<BR> Line break (unpaired).
<HR> Horizontal rule (line) (unpaired).
<PRE> Preformatted text (paired).
<EM> Emphasis (usually italics) (paired).
<STRONG> Stronger emphasis (paired).
<B> Bold (text attribute) (paired).
<I> Italics (text attribute) (paired).
<H1> Level 1 (e.g., document) heading (paired).
<H2> Level 2 (e.g., part) heading (paired).
<H3> Level 3 (e.g., chapter) heading (paired).
<H4> Level 4 (e.g., section) heading (paired).
<H5> Level 5 (e.g., subsection) heading (paired).
<H6> Level 6 (e.g., paragraph) heading (paired).

Otros elementos:
<meter>Contained content is a measurement, like length.</meter>
<progress value="" max=""> Contains current process toward a goal, like a percentage.
<time>time</time>
<command> Represents something a command a user may execute.
<datagrid> Represents data. Non-tabular or otherwise
<output>Displays the output of a program or process</output>
<ruby>Allows input of rubi/ruby annotations for Asian languages</ruby>


NEW FORM CONTROLS

<datetime>
<datetime-local>
<number>
<range>
<email>
<url>
<color>
```
