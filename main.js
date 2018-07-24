Node.prototype.getSiblings = function () {
    var allChildren = this.parentNode.children
    var array = {
        length: 0
    }
    for (let i = 0; i < allChildren.length; i++) {
        if (allChildren[i] !== this) {
            array[array.length] = allChildren[i]
            array.length += 1
        }
    }
    return array
}

Node.prototype.addClass = function (classes) {
    for (let key in classes) {
        var value = classes[key]
        var methodName = value ? 'add' : 'remove'
        this.classList[methodName](key)
    }
}

item3.getSiblings.call(item3)
item3.addClass.call(item3,{'a':false,'b':true,'c':true})