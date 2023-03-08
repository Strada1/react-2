const TYPE = {
  INPUT: {
    TEXT: 'text',
    DATETIME_LOCAL: 'datetime-local',
    RADIO: 'radio',
    CHECKBOX: 'checkbox',
  },
  BUTTON: {
    SUBMIT: 'submit',
    BUTTON: 'button',
  },
};

const TAG = {
  LABEL: 'label',
  INPUT: 'input',
  BUTTON: 'button',
  FORM: 'form',
  MAIN: 'main',
  SECTION: 'section',
};

const ICON = {
  SPRITE: '\\src\\assets\\img\\sprite.svg',
  PREFIX: 'icon-svg',
  HASHTAG: '#',
  PLUS: 'plus',
  CHECK: 'check',
  CROSS: 'cross',
  CALENDAR: 'calendar',
  LIGHTNING: 'lightning',
  CIRCLE_ARROW: 'circle-arrow',
};

const PRIORITY = ['low', 'medium', 'high'];

const STATUS = {
  DONE: true,
  TODO: false,
};

const TITLE = {
  TASK: 'Task',
  DATE: 'Date',
  PRIORITY: 'Priority',
  TASKS: 'Tasks',
  HISTORY: 'History',
  PLACEHOLDER: 'type new task',
  NEW_TASK: 'New Task',
  TODO_LIST: 'TODO List',
};

const VALUE = {
  DEFAULT: '',
  ZERO: 0,
  OFF: 'off',
  INPUT_ERROR: 'Fill in the task and date fields correctly',
};

const TASK_KEY = {
  PRIORITY: 'priority',
  STATUS: 'status',
  TEXT: 'text',
  DATE: 'date',
  ID: 'id',
};

const ACTION = {
  DELETE: 'delete',
  ADD: 'add',
  CHANGE: 'change',
  UPDATE: 'update',
};

const PREFIX = {
  ...TAG,
  TASK: 'task',
  TITLE: 'title',
  ERROR: 'error',
  LIST: 'list',
  CONTAINER: 'container',
  OPTIONS: 'options',
  SELECTION: 'selection',
  WRAPPER: 'wrapper',
};

export {
  TYPE, TITLE, VALUE, TASK_KEY, ICON, STATUS, ACTION, PRIORITY, PREFIX,
};
