var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var getFullName = function (name, surname) {
    return "".concat(name, " ").concat(surname);
};
var user2 = {
    name: 'Moster',
    age: 30,
    getMesssage: function () {
        return "Hello ".concat(name);
    }
};
var username = 'alex';
var pageName = '1';
var errorMessage = null;
var popularTags2 = ['dragon', 'coffee'];
var popularTags = null;
var userDemo = null;
var doSomething = function () {
    console.log('doSomething');
};
var vAny = 10;
var vUnknown = 10;
var s1 = vAny;
var s2 = vUnknown;
var pageNumber = '1';
// type assertion/casting
var numericPageNumber = pageNumber;
var page = '1';
var pageNumber2 = page;
var someElement = document.querySelector('.foo');
someElement === null || someElement === void 0 ? void 0 : someElement.addEventListener('blur', function (event) {
    var target = event.target;
    console.log('event', target.value);
});
var User2 = /** @class */ (function () {
    function User2(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangableName = firstName;
    }
    User2.prototype.changeUnchangableName = function () {
        // cannot changereadonly 
    };
    User2.prototype.getFullname = function () {
        return this.firstName + ' ' + this.lastName;
    };
    User2.maxAge = 50;
    return User2;
}());
var user3 = new User2('Moster', 'Lessons');
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(editor, firstName, lastName) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.editor = editor;
        return _this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admin.prototype.getEditor = function () {
        return this.editor;
    };
    return Admin;
}(User2));
var addId = function (obj) {
    var id = Math.random.toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var user4 = {
    name: 'Jack',
    data: {
        meta: 'foo'
    },
    meta: 'bar'
};
var user5 = {
    name: 'John',
    data: ['foo', 'bar', 'baz'],
    meta: 'baz'
};
var result = addId(user4);
console.log('result', result);
// const searchStr = 'foo'
// const _hasSearchedString = any<string>((el: string) => el.contains(searchedStr) ['foooooo', 'bar', 'baz'])
//enum 
var StatusEnum;
(function (StatusEnum) {
    StatusEnum["NotStarted"] = "notStarted";
    StatusEnum["InProgress"] = "inProgress";
    StatusEnum["Done"] = "done";
})(StatusEnum || (StatusEnum = {}));
var notStartedStatus = StatusEnum.NotStarted;
notStartedStatus = StatusEnum.Done; // only Status
console.log(StatusEnum.InProgress); // 'inProgress'
