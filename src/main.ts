const getFullName = (name: string, surname: string): string => {
  return `${name} ${surname}`;
}

interface IUser {
  name: string
  age?: number
  getMesssage(): string;
}

const user2: IUser = {
  name: 'Moster',
  age: 30,
  getMesssage() {
    return `Hello ${name}`
  }
}

let username: string = 'alex';
let pageName: string | number = '1'
let errorMessage: string | null = null;

// Type Alias
type ID = string 
type PopularTag = string;
type MaybePopularTag = PopularTag | null

interface User1Interface {
  id: ID;
  name: string
  surname: string
}
const popularTags2: PopularTag[] = ['dragon', 'coffee']
const popularTags: MaybePopularTag = null;
let userDemo: UserInterface | null = null

const doSomething = (): void => {
  console.log('doSomething')
}

let vAny: any = 10
let vUnknown: unknown = 10

let s1: string = vAny
let s2: string = vUnknown as string;
let pageNumber: string = '1'
// type assertion/casting
let numericPageNumber: number = pageNumber as unknown as number

let page: any = '1'
let pageNumber2 = page as string

const someElement = document.querySelector('.foo')
someElement?.addEventListener('blur', (event) => {
  const target = event.target as HTMLInputElement
  console.log('event', target.value)
})

interface User2Interface {
  getFullname(): string
}

class User2 implements User2Interface {
  protected firstName: string;
  protected lastName: string;
  readonly unchangableName: string;
  static readonly maxAge: number = 50;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName
    this.unchangableName = firstName
  }

  changeUnchangableName(): void {
    // cannot changereadonly 
  }

  getFullname(): string {
    return this.firstName + ' ' + this.lastName
  }
}

const user3 = new User2('Moster', 'Lessons')

class Admin extends User2 {
  private editor: string 

  constructor(editor: string, firstName: string, lastName: string) {
    super(firstName, lastName)
    this.editor = editor
  }

  setEditor(editor: string): void {
    this.editor = editor
  }

  getEditor(): string {
    return this.editor
  }
}

const addId = <T extends object>(obj: T) => {
  const id = Math.random.toString(16)
  return {
    ...obj,
    id
  }
}

interface User4Interface<T, V> {
  name: string
  data: T;
  meta: V;
}

const user4: User4Interface<{ meta: string }, string> = {
  name: 'Jack',
  data: {
    meta: 'foo'
  },
  meta: 'bar'
};

const user5: User4Interface<string[], string> = {
  name: 'John',
  data: ['foo', 'bar', 'baz'],
  meta: 'baz'
}

const result = addId<User4Interface<{ meta: string }, string>>(user4);
console.log('result', result)

// const searchStr = 'foo'
// const _hasSearchedString = any<string>((el: string) => el.contains(searchedStr) ['foooooo', 'bar', 'baz'])

//enum 

enum StatusEnum {
  NotStarted = 'notStarted',
  InProgress = 'inProgress',
  Done = 'done'
}

let notStartedStatus: StatusEnum = StatusEnum.NotStarted;

notStartedStatus = StatusEnum.Done; // only Status

console.log(StatusEnum.InProgress); // 'inProgress'



interface Task {
  id: string;
  status: StatusEnum;
}