INDEX
====

[__Angular__](#angular)

1. [General](#angular_general)
    
    1.1 [ngOnChanges](#angular_general_changes)
    
    1.2 [ngOnDestroy](#angular_general_destroy)
        
    1.3 [ngIf + else](#angular_general_ifelse)
        
    1.4 [ViewChild](#angular_general_viewchild)
        
    1.5 [ngSwitch](#angular_general_ngswitch)
        
    1.6 [Upload FormData](#angular_general_formdata)
        
    1.7 [Callback](#angular_general_callback)
    
2. [Dates](#angular_dates)
    
    2.1 [Date pipe](#angular_dates_pipe)
    
    2.2 [Format date](#angular_dates_format)
    
3. [i18n](#angular_i18n)

    3.1 [ngTranslate](#angular_i18n_ngtranslate)
    
4. [Routes](#angular_routes)

    4.1 [Static Data](#angular_routes_staticdata)
    
    4.2 [Dynamic Data](#angular_routes_dynamicdata)
    
    4.3 [Active & Exact](#angular_routes_activeexact)
    
    4.4 [Fetching route parameters](#angular_routes_params)
    
    4.5 [Fetching route parameters Reactively](#angular_routes_paramsreact)
    
5. [Guard](#angular_guard)

    5.1 [Guard service](#angular_guard_service)
    
    5.2 [Guard child](#angular_guard_child)
    
6. [Forms](#angular_form)

    6.1 [Form Array](#angular_form_array)
    
    6.2 [Custom Validator](#angular_form_customvalidator)
    
    6.3 [Custom Async Validator](#angular_form_asyncvalidator)
    
    6.4 [Image preview](#angular_form_imgpreview)
    
7. [Errors](#angular_errors)

[__eUI__](#eui)

1. [Forms](#eui_forms)

    1.1 [Mark as Invalid](#eui_forms_invalid)
    
2. [Pipes](#eui_pipes)


<hr style="border: 6px solid grey; height: 2px">
<hr style="border: 6px solid grey; height: 2px">
<h1 name="angular"><img src="https://cdn-images-1.medium.com/max/480/1*nbJ41jD1-r2Oe6FsLjKaOg.png" width="40">ANGULAR</h1>
<hr style="border: 6px solid grey; height: 2px">

### <a name="angular_general"></a> __1. General__ ###

<hr style="border: 2px solid grey">

#### <a name="angular_general_changes"></a> __1.1. ngOnChanges__ ####

```Typescript
ngOnChanges(changes: SimpleChanges) {
  for (let property in changes) {
    if (property === 'documents') {
      console.log(changes[property].currentValue);
      console.log(changes[property].previousValue);
    }
  }
}
```

#### <a name="angular_general_destroy"></a> __1.2. ngOnDestroy__ ####

Para dejar de subscribirse cuando el componente se destruya
```Typescript
subscription: Subscription;

ngOnInit() {
  this.subscription = this.route.params.subscribe()
}

ngOnDestroy() {
  this.subscription.unsubscribe();
}
```

#### <a name="angular_general_ifelse"></a> __1.3. ngIf + else__ ####

```html
<p *ngIf="serverCreated; else noServer">abc</p>
<ng-template #noServer><p>abc</p></ng-template>
```

#### <a name="angular_general_viewchild"></a> __1.4. ViewChild__ ####

En el .html
```html
<div #inputFile></div>
```
En el .ts
```Typescript
@ViewChild('inputFile') input: ElementRef;

//Ejemplos
this.inputFile.nativeElement.click();
this.inputFile.nativeElement.value = '';
```

#### <a name="angular_general_ngswitch"></a> __1.5. ngSwitch__ ####

```HTML
<div [ngSwitch]="value">
  <p *ngSwitchCase="5">Value is 5</p>
  <p *ngSwitchCase="10">Value is 10</p>
  <p *ngSwitchCase="15">Value is 15</p>
  <p *ngSwitchDefault>Value is default</p>
</div>
```

#### <a name="angular_general_formdata"></a> __1.6. upload Form Data__ ####

```Typescript
upload(file, type): Observable<any> {
  const form = new FormData();

  form.append('file', file, file.name);
  form.append('type', type);

  return this.http.post(this.api, form);
}
```

#### <a name="angular_general_callback"></a> __1.7. Callback__ ####

```Typescript
onDelete(index) {
  const callback = () => this.confirmDelete(index);
  this.confirmAction.confirm(this.deleteWarning, callback);
}
```

<br>
<hr style="border: 2px solid grey">

### <a name="angular_dates"></a> __2. Dates__ ###

<hr style="border: 2px solid grey">

#### <a name="angular_dates_pipe"></a> __2.1. Date pipe__ ####

```Typescript
constructor(private datePipe: DatePipe) {}

this.datePipe.transform(this.startingDate.value, 'dd/MM/yyyy');
```

#### <a name="angular_dates_format"></a> __2.2. Format date__ ####

```Typescript
constructor (private datePipe: DatePipe) {}

if (this.birthDate.value instanceof Date) {
  formatDate = this.datePipe.transform(
    this.birthDate.value, 'dd/MM/yyyy'
  );
}

if (this.birthDate.value instanceof Object && this.birthDate.value.hasOwnProperty('_isAMomentObject')) {
  formatDate = this.birthDate.value.format('dd/MM/yyyy');
}
```

<br>
<hr style="border: 2px solid grey">

### <a name="angular_i18n"></a> __3. i18n__ ###

<hr style="border: 2px solid grey">

#### <a name="angular_i18n_ngtranslate"></a> __3.1. ngTranslate__ ####

##### __3.1.1. con variables__ #####

```html
<div *ngFor="let top of topCountries"> {{ 'etiqueta' | translate: {
  percent: top.percentage | uxNumberFormat,
  code: top.countryCode | uppercase,
  count: top.count | uxNumberFormat,
  threshold: top.treshold | uxNumberFormat
}}}
</div>
```
Y en el JSON correspondiente (en.json, es.json...)
```json
"etiqueta": "{{percent}}% of {{code}} thresold ({{count}} / {{threshold}})"
```

>tambien se pueden anidar pipe "| transtale" dentro del propio translate

##### __3.1.2. traduccion en el codigo__ #####

```Typescript
constructor (private translate: TranslateService) {}

this.translate.instant(etiqueta)
```

<br>
<hr style="border: 2px solid grey">

### <a name="angular_routes"></a> __4. Routes__ ###

<hr style="border: 2px solid grey">

#### <a name="angular_routes_staticdata"></a> __4.1. Static Data__ ####

En *wizard-routing.module.ts*
```Typescript
{ path: 'screen/wizard', ..., data: {message: 'info'} }
```

En el componente correspondiente
```Typescript
constructor (private route: ActivatedRoute) {}

ngOnInit() {
  this.errorMessage = this.route.snapshot.data['message'];
  this.route.data.subscribe(
    (data: Data) => this.errorMessage = data['message']
  );
}
```

#### <a name="angular_routes_dynamicdata"></a> __4.2. Dynamic Data__ ####
Data en las rutas de forma dinámica

En el _wizard.resolver.ts_
```Typescript
interface Server {
  id: number;
  name: string;
}
@Injectable()
export class WizardResolver implements Resolve<Server> {
  constructor(private wizardService: WizardService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return logica
  }
}
```
En _wizard-routing.module.ts_
```Typescript
const routes: Routes = [
  { path: '', 
    component: WizardComponent, 
    children: [...], 
    resolve: { dataResolve: WizardResolver }
  }
];
```
Y en el componente correspondiente
```Typescript
ngOnInit() {
  this.route.data.subscribe(
    (data: Data) => this.server = dataResolve['data']
  )
}
```

#### <a name="angular_routes_activeexact"></a> __4.3. Active & Exact__ ####

Que el path sea exacto para marcarlo como activo
```html
<li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
```

#### <a name="angular_routes_params"></a> __4.4. Fetching route parameters__ ####

En el *app-routing.module*
```Typescript
const appRoutes: Routes = [
  {path: 'users/:id/:name', component: UserComponent}
];
```

En el componente correspondiente
> url = 'users/1/pau'
```Typescript
constructor (private route: ActivatedRoute) {}

ngOnInit() {
  this.user = {
    id: this.route.snapshot.params['id'],
    name: this.route.snapshot.params['name']
  }
}
```

#### <a name="angular_routes_paramsreact"></a> __4.5. Fetching route parameters Reactively__ ####

En el *app-routing.module*
```Typescript
const appRoutes: Routes = [
  {path: 'users/:id/:name', component: UserComponent}
];
```

En el componente correspondiente
> url = 'users/1/pau'
```Typescript
constructor (private route: ActivatedRoute) {}

ngOnInit() {
  this.route.params.subscribe(
    (params: Params) => {
      this.user.id = params['id'];
      this.user.name = params['name'];
    }
  )
}
```

<br>
<hr style="border: 2px solid grey">

### <a name="angular_guard"></a> __5. Guard__ ###

<hr style="border: 2px solid grey">

#### <a name="angular_guard_service"></a> __5.1. Guard Service__ ####

Pueden ser asincronos o sincronos
- \<boolean>
- Observable\<boolean>
- Promise\<boolean>

En *home-guard.service.ts*
```Typescript
@Injectable()
export class HomeGuard implements CanActivate {
  constructor (private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.isAuthenticated().then(
      (authenticated: boolean) => {
        if (authenticated) { return true }
        else { this.router.navigate(['/'])}
      }
    )
  }
}
```

En el *routing.module.ts*
```Typescript
{path: 'screen/wizard', canActivate: [HomeGuard], ...}
```

#### <a name="angular_guard_child"></a> __5.2. Guard child__ ####

```Typescript
@Injectable()
export class HomeGuard implements CanActivate {
  constructor (private authService: AuthService, private router: Router) {}

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.canActivate(route, state);
  }
}
```

En el *routing.module.ts*
```Typescript
{path: 'screen/wizard', canActivateChild: [HomeGuard], children: [...], ...}
```

<br>
<hr style="border: 2px solid grey">

### <a name="angular_form"></a> __6. Forms__ ###

<hr style="border: 2px solid grey">

#### <a name="angular_form_array"></a> __6.1. Form Array__ ####

En el HTML correspondiente
```html
<form [formGroup]="signupForm">
    <div formArrayName="hobbies">
        <div *ngFor="let hobbyControl of signupForm.get('hobbies').controls; let i = index">
            <input type="text" [formControlName]="i">
        </div>
    </div>
</form>
```

En el TS correspondiente
```Typescript
this.signupForm = new FormGroup({
    'userData': new FormGroup({
        'username': new FormControl(null),
        'email': new FormControl(null,  Validatoris.email)
    }),
    'hobbies': new FormArray([])
});

onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
}
```

Para borrar
```Typescript
(<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
```

#### <a name="angular_form_customvalidator"></a> __6.2. Custom Validator__ ####

```Typescript
buildForm() {
    this.form = this.formBuilder.group({
        'earlyClosure': [null, [Validators,required, this.closureDays.bind(this)] ]
    })
}

closureDays(control: AbstractControl): ValidationErrors | null {
    const minDate = new Date();
    if (minDate > control.value) {
        return { requiredDays: true };
    }
    return null;
}
```
> Por ejemplo podemos utilizar: *ngIf="earlyClosure.errors['requiredDays']"

#### <a name="angular_form_asyncvalidator"></a> __6.3. Custom Async Validator__ ####

```Typescript
this.signupForm = new FormGroup({
    'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
});

forbiddenEmails(control: FormControl): Promise<any> | Obserbable<any> {
    const promise = new Promise<any>((resolve, reject) => {
        setTimeout(() => {
            if (control.value === 'test@test.com') {
                resolve({ 'emailIsForbidden': true });
            } else {
                resolve(null);
            }
        }, 1500);
    });
    return promise;
}
```
Antes de poner el *ng-valid* o *ng-invalid* angular pone un *ng-pending*

#### <a name="angular_form_imgpreview"></a> __6.4. Image preview__ ####

```html
<label for="imagePath">Image Url</label>
<input #imagePath formControlName="imagePath" ...>

<img [src]="imagePath.value" class="img-responsive">
```

<br>
<hr style="border: 2px solid grey">

### <a name="angular_errors"></a> __7. Errores Angular__ ###

<hr style="border: 2px solid grey">

Cuando el **npm run start** no ve los cambios del codigo
- ```echo 65536 | sudo tee -a /proc/sys/fs/inotify/max_user_watches```

Error: cannot find module **'@angular-devkit/core'**
- ```npm i -D @angular-devkit/core```

Error: **ngDevMode**

- Borrar node-modules y package.lock.json
- ```npm install```

<br>
<hr style="border: 6px solid grey; height: 2px">
<h1 name="eui" style="text-aling: center;"><img src="https://eui.ecdevops.eu/assets/images/landing-page/eui-logo.svg" width="40"> eUI</h1>
<hr style="border: 6px solid grey; height: 2px">

### <a name="eui_forms"></a> __1. Forms__ ###

<hr style="border: 2px solid grey">

#### <a name="eui_forms_invalid"></a> __1.1. Marcar como invalidos__ ####

```Typescript
this.uxService.markFormGroupTouched(this.form.controls);
```

<br>
<hr style="border: 2px solid grey">

### <a name="eui_pipes"></a> __2. Pipes__ ###

<hr style="border: 2px solid grey">

uxTruncate
```
{{ message.text | uxTruncate: 46 }}
```

<br>
<hr style="border: 6px solid grey; height: 2px">
<h1 name="a_js" style="text-aling: center;"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" width="40"> Javascript</h1>
<hr style="border: 6px solid grey; height: 2px">

### __1. Dates__ ###

<hr style="border: 2px solid grey">

#### __1.1. Fecha to new Date()__ ####

Para convertir una fecha en formato dd/mm/yyyy a Date
```Javascript
toDate(date) {
  const [day, month, year] = date.split('/');
  return new Date(year, month - 1, day);
}
```

<br>
<hr style="border: 2px solid grey">

### __2. Objects__ ###

<hr style="border: 2px solid grey">

#### __2.1. getOwnPropertyNames()__ ####

Para comprobar si un Object esta vacio
```Javascript
Object.getOwnPropertyNames(objeto).length === 0;
```

<br>
<hr style="border: 2px solid grey">

### __3. Window__ ###

<hr style="border: 2px solid grey">

#### __3.1. Scroll top__ ####

num1 = numero posicion X

num2 = numero posicion Y
```Javascript
window.scrollTo(num1, num2);
```

<br>
<hr style="border: 2px solid grey">

### __4. Others__ ###

<hr style="border: 2px solid grey">

#### __4.1. Trim__ ####

Quita los espacios en blanco de los laterales
```Javascript
telephoneNumber.value.trim()
```

<br>
<hr style="border: 6px solid grey; height: 2px">
<h1 style="text-aling: center;"><img src="https://cdn-images-1.medium.com/max/1200/1*sXrpvkWUPm1K9zGKhI3MlA.png" width="40"> RxJS</h1>
<hr style="border: 6px solid grey; height: 2px">

### __1. Ejemplos__ ###

<hr style="border: 2px solid grey">

#### __1.1. Zip__ ####

```Javascript
Observable.zip(
  this.eciService.getCountries(),
  this.reportService.getSosReporting()
).subscribe(data => {
  this.countries = data[0];
  this.sosReporting(data[1])
})
```

#### __1.2. Zip & SwitchMap__ ####

Encapsula las dos funciones iguales y las ejecuta para luego ejecutar el .switchMap()
```Javascript
Observable.zip(this.initiativeService.saveDocument(doc1), this.initiativeService.saveDocument(doc2))
  .switchMap(data => this.initiativeService.saveInitiative()).subscribe(
    data => console.log(data)
)
```

#### __1.3. Concat__ ####

Concatena las llamadas
```Javascript
const custom$ = this.api.updateCustom();
const twitter$ = this.api.updateTwitter();

Observable.concat(custom$, twitter$).subscribe(data => console.log(data))
```

<br>
<hr style="border: 6px solid grey; height: 2px">
<h1 style="text-aling: center;"><img src="https://banner2.kisspng.com/20180412/agw/kisspng-cmd-exe-command-line-interface-computer-icons-user-console-5ad01cec42b224.3893284015235883322732.jpg" width="40"> Consola</h1>
<hr style="border: 6px solid grey; height: 2px">

### __1. General__ ###

<hr style="border: 2px solid grey">

Borrar \<nombre>
```
rm -rf <nombre>
```

Ver el \<archivo>
```
more <archivo>
```

Editar el \<archivo>
```
vim <archivo>
```

Comprime la \<carpeta> en un archivo llamado \<nombre>.tar.gz
```
tar -czvf <nombre>.tar.gz <carpeta>/
```

<br>
<hr style="border: 6px solid grey; height: 2px">
<h1 style="text-aling: center;"><img src="https://miro.medium.com/max/480/1*zzvdRmHGGXONZpuQ2FeqsQ.png" width="40"> Git</h1>
<hr style="border: 6px solid grey; height: 2px">

### __1. General__ ###

<hr style="border: 2px solid grey">

Ver el estado de la rama
```
git status
``` 

Historico de los comandos
```
git log
```

Que se ha modificado y aun no se ha subido al Stage
```
git diff
```

<br>
<hr style="border: 2px solid grey">

### __2. Repositorios__ ###

<hr style="border: 2px solid grey">

#### __2.1. Nuevo__ ####

Crear el archivo .git
```
git init
```
```
git add <archivo> o git add .
git commit -m <texto-explicativo>
```

#### __2.2. Clonar__ ####

Al clonar se nos configura automaticamente un remoto: origin
```
git clone <url-repositorio>
```

<br>
<hr style="border: 2px solid grey">

### __3. Branches__ ###

<hr style="border: 2px solid grey">

#### __3.1. General__ ####

Tip
```
git log --oneline --graph --decorate --all
```

Lista de las ramas locales
```
git branch
```

Lista de las ramas locales (blanco) y remotas (rojo)
```
git branch -a
```

Cambiar de rama
```
git checkout <rama>
``` 

Ver que cambios hay en el remoto (origin) (¿origin, tienes novedades?)
```
git fetch
```

#### __3.2. Crear/Editar__ ####

Crea una rama nueva
```
git branch <nueva-rama>
```

Crea una rama nueva a partir de la actual
```
git checkout -b <nueva-rama>
```

Renombrar rama
```
git branch -m <nombre-antiguo> <nombre-nuevo>
```

#### __3.3. Eliminar__ ####

Eliminar rama local
```
git branch -d <rama>
git branch -D <rama>
```

Limpia las ramas borradas del remoto (origin)
```
git remote prune origin
```

#### __3.4. Push__ ####

Subir cambios de la rama en la que estamos a \<origin> \<rama>
```
git push <origin> <rama>
```

#### __3.5. Pull__ ####

Bajarse codigo del remoto, \<origin> \<rama>, a la rama que estamos
```
git pull <origin> <rama>
```

#### __3.6. Merge__ ####

Fusionar dos ramas. De la \<rama> a la rama que estamos
```
git merge <rama>
```

Abortar merge
```
git merge --abort
```

<br>
<hr style="border: 2px solid grey">

### __4. Errores Git__ ###

<hr style="border: 2px solid grey">

Cuando hay un error al cambiar de rama
```
git checkout <rama-de-donde-vienes>
git reset --hard <rama>
git clean -f -d
```

<br>
<hr style="border: 6px solid grey; height: 2px">
<h1 style="text-aling: center;"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/250px-HTML5_logo_and_wordmark.svg.png" width="40"> HTML 5</h1>
<hr style="border: 6px solid grey; height: 2px">

### __1. Entidades__ ###

<hr style="border: 2px solid grey">

- ```<``` => &lt
- ```>``` => &gt
- ```&``` => &amp
- ```"``` => &quot
- ``` ``` => &nbsp
- ```'``` => &apos
