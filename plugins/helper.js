function isPlainObject(some) {
  return Object.prototype.toString.call(some) === '[object Object]';
}

function isFunc(some) {
  return typeof some === 'function';
}

function pick(setting) {
  const isObject = some => typeof some === 'object' && some !== null;
  const isArray = some => some instanceof Array;
  const isString = some => typeof some === 'string';

  function typeConvert(value, typeString, ...typeParams) {
    if (!typeString) return value;
    switch (typeString.trim().toLowerCase()) {
      case 'float':
        return parseFloat(value, ...typeParams);
      case 'int':
        return parseInt(value, ...typeParams);
      default:
        return value;
    }
  }

  function deepProp(object, string) {
    const [propKey, propType, ...propTypeParams] = string.split(',');
    const props = propKey.trim().split('.');
    const value = props.reduce(
      (o, key) => (o && isObject(o) ? o[key] : o),
      object
    );
    return {
      key: props[props.length - 1],
      value: typeConvert(value, propType, ...propTypeParams)
    };
  }

  function pickArray(array) {
    return function pickArrayFunc(object) {
      return array.reduce((o, k) => {
        const { key, value } = deepProp(object, k);
        return { ...o, [key]: value };
      }, {});
    };
  }

  function pickObject(objectSetting) {
    return function pickObjectFunc(object) {
      return Object.keys(objectSetting).reduce((o, k) => {
        const { value } = deepProp(object, objectSetting[k]);
        return { ...o, [k]: value };
      }, {});
    };
  }

  if (isArray(setting)) {
    return pickArray(setting);
  }
  if (isObject(setting)) {
    return pickObject(setting);
  }
  if (isString(setting)) {
    return obj => deepProp(obj, setting).value;
  }

  throw new Error('参数必须为String、Object、Array类型');
}

function getRandomStream() {
  const s = Math.random().toString(16).slice(2).toUpperCase();
  let i = 0;
  const next = () => {
    i += 1;
    return i < s.length ? { value: s.charAt(i), next } : getRandomStream();
  };
  return { value: s.charAt(i), next };
}

function noLeadingNumber(c, pos) {
  return !(pos === 0 && /[0-9]/.test(c));
}

function getRandomId(len, filter = noLeadingNumber) {
  const getChars = (pos, stream, s) => {
    if (pos >= len) return s;
    return filter(stream.value, pos)
      ? getChars(pos + 1, stream.next(), s + stream.value)
      : getChars(pos, stream.next(), s);
  };
  return getChars(0, getRandomStream(), '');
}

function excludeKeys(object, keys) {
  return Object.keys(object).reduce(
    (o, k) => (keys.includes(k) ? o : { ...o, [k]: object[k] }),
    {}
  );
}

function removeUnusedTags(content) {
  const div = document.createElement('div');
  div.innerHTML = content;

  // 删除特殊标签，只保留文本
  const removeTag = tag => {
    const nodes = [...div.getElementsByTagName(tag)];
    nodes.forEach(node => node.remove());
  };
  const unusedTags = ['style', 'script', 'noscript'];
  unusedTags.forEach(removeTag);

  return div.innerHTML;
}

function getCallbackName(namespace) {
  return `${namespace.toUpperCase()}_CALLBACK_${getRandomId(16)}`;
}

export {
  pick,
  getCallbackName,
  getRandomId,
  excludeKeys,
  isFunc,
  isPlainObject,
  removeUnusedTags
};
