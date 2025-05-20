const { celebrate, Joi } = require('celebrate');

const saveCategoryValidator = celebrate({
  body: Joi.object().keys({
    title: Joi.string().required(),
    parentId: Joi.string(),
  }),
}, {
  abortEarly: false,
  messages: {
    'string.empty': 'Не заполнено обязательное поле {#label}!',
    'any.required': 'Отсутствует обязательное поле {#label}',
  },
});

module.exports = { saveCategoryValidator };
