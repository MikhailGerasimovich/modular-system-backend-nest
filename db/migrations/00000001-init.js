'use strict';

const Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "specialties", deps: []
 * createTable "disciplines", deps: []
 * createTable "users", deps: []
 * createTable "departments", deps: []
 * createTable "roles", deps: []
 * createTable "academic_plans", deps: [specialties]
 * createTable "groups", deps: [academic_plans]
 * createTable "students", deps: [users]
 * createTable "subgroups", deps: [groups]
 * createTable "teachers", deps: [departments, users]
 * createTable "discipline_academic_plans", deps: [disciplines, departments, academic_plans]
 * createTable "academic_modules", deps: [discipline_academic_plans]
 * createTable "tasks", deps: [academic_modules]
 * createTable "grades", deps: [students, tasks]
 * createTable "teacher_disciplines", deps: [teachers, discipline_academic_plans]
 * createTable "student_subgroups", deps: [students, subgroups]
 * createTable "user_roles", deps: [users, roles]
 *
 **/

const info = {
    "revision": 1,
    "name": "init",
    "created": "2023-07-22T14:05:02.604Z",
    "comment": ""
};

const migrationCommands = [

    {
        fn: "createTable",
        params: [
            "SequelizeMigrationsMeta",
            {
                "revision": {
                    "primaryKey": true,
                    "type": Sequelize.INTEGER
                },
                "name": {
                    "allowNull": false,
                    "type": Sequelize.STRING
                },
                "state": {
                    "allowNull": false,
                    "type": Sequelize.JSON
                },
            },
            {}
        ]
    },
    {
        fn: "bulkDelete",
        params: [
            "SequelizeMigrationsMeta",
            [{
                revision: info.revision
            }],
            {}
        ]
    },
    {
        fn: "bulkInsert",
        params: [
            "SequelizeMigrationsMeta",
            [{
                revision: info.revision,
                name: info.name,
                state: '{"revision":1,"tables":{"specialties":{"tableName":"specialties","schema":{"id":{"seqType":"Sequelize.INTEGER","unique":true,"primaryKey":true,"autoIncrement":true},"title":{"seqType":"Sequelize.STRING","allowNull":false},"short_title":{"seqType":"Sequelize.STRING","allowNull":false}},"indexes":{}},"academic_plans":{"tableName":"academic_plans","schema":{"id":{"seqType":"Sequelize.INTEGER","unique":true,"primaryKey":true,"autoIncrement":true},"recruitment_year":{"seqType":"Sequelize.STRING","allowNull":false},"speciality_id":{"seqType":"Sequelize.INTEGER","allowNull":true,"references":{"model":"specialties","key":"id"},"onUpdate":"CASCADE","onDelete":"SET NULL"}},"indexes":{}},"groups":{"tableName":"groups","schema":{"id":{"seqType":"Sequelize.INTEGER","unique":true,"primaryKey":true,"autoIncrement":true},"title":{"seqType":"Sequelize.STRING","allowNull":false},"academic_plan_id":{"seqType":"Sequelize.INTEGER","allowNull":true,"references":{"model":"academic_plans","key":"id"},"onUpdate":"CASCADE","onDelete":"SET NULL"}},"indexes":{}},"disciplines":{"tableName":"disciplines","schema":{"id":{"seqType":"Sequelize.INTEGER","unique":true,"primaryKey":true,"autoIncrement":true},"title":{"seqType":"Sequelize.STRING","allowNull":false},"short_title":{"seqType":"Sequelize.STRING","allowNull":false}},"indexes":{}},"users":{"tableName":"users","schema":{"id":{"seqType":"Sequelize.INTEGER","unique":true,"primaryKey":true,"autoIncrement":true},"login":{"seqType":"Sequelize.STRING","allowNull":false},"password":{"seqType":"Sequelize.STRING","allowNull":false}},"indexes":{}},"students":{"tableName":"students","schema":{"id":{"seqType":"Sequelize.INTEGER","unique":true,"primaryKey":true,"autoIncrement":true},"name":{"seqType":"Sequelize.STRING","allowNull":false},"surname":{"seqType":"Sequelize.STRING","allowNull":false},"patronymic":{"seqType":"Sequelize.STRING","allowNull":false},"code":{"seqType":"Sequelize.STRING","allowNull":false},"user_id":{"seqType":"Sequelize.INTEGER","allowNull":true,"references":{"model":"users","key":"id"},"onUpdate":"CASCADE","onDelete":"SET NULL"}},"indexes":{}},"subgroups":{"tableName":"subgroups","schema":{"id":{"seqType":"Sequelize.INTEGER","unique":true,"primaryKey":true,"autoIncrement":true},"title":{"seqType":"Sequelize.STRING","allowNull":false},"group_id":{"seqType":"Sequelize.INTEGER","allowNull":true,"references":{"model":"groups","key":"id"},"onUpdate":"CASCADE","onDelete":"SET NULL"}},"indexes":{}},"departments":{"tableName":"departments","schema":{"id":{"seqType":"Sequelize.INTEGER","unique":true,"primaryKey":true,"autoIncrement":true},"title":{"seqType":"Sequelize.STRING","allowNull":false},"short_title":{"seqType":"Sequelize.STRING","allowNull":false}},"indexes":{}},"teachers":{"tableName":"teachers","schema":{"id":{"seqType":"Sequelize.INTEGER","unique":true,"primaryKey":true,"autoIncrement":true},"name":{"seqType":"Sequelize.STRING","allowNull":false},"surname":{"seqType":"Sequelize.STRING","allowNull":false},"patronymic":{"seqType":"Sequelize.STRING","allowNull":false},"department_id":{"seqType":"Sequelize.INTEGER","allowNull":true,"references":{"model":"departments","key":"id"},"onUpdate":"CASCADE","onDelete":"SET NULL"},"user_id":{"seqType":"Sequelize.INTEGER","allowNull":true,"references":{"model":"users","key":"id"},"onUpdate":"CASCADE","onDelete":"SET NULL"}},"indexes":{}},"discipline_academic_plans":{"tableName":"discipline_academic_plans","schema":{"id":{"seqType":"Sequelize.INTEGER","unique":true,"primaryKey":true,"autoIncrement":true},"semester":{"seqType":"Sequelize.INTEGER","allowNull":false},"lectures_number":{"seqType":"Sequelize.INTEGER","allowNull":false},"practical_number":{"seqType":"Sequelize.INTEGER","allowNull":false},"laboratory_number":{"seqType":"Sequelize.INTEGER","allowNull":false},"control_form":{"seqType":"Sequelize.STRING","allowNull":false},"discipline_id":{"seqType":"Sequelize.INTEGER","allowNull":true,"references":{"model":"disciplines","key":"id"},"onUpdate":"CASCADE","onDelete":"SET NULL"},"department_id":{"seqType":"Sequelize.INTEGER","allowNull":true,"references":{"model":"departments","key":"id"},"onUpdate":"CASCADE","onDelete":"SET NULL"},"academic_plan_id":{"seqType":"Sequelize.INTEGER","allowNull":true,"references":{"model":"academic_plans","key":"id"},"onUpdate":"CASCADE","onDelete":"SET NULL"}},"indexes":{}},"academic_modules":{"tableName":"academic_modules","schema":{"id":{"seqType":"Sequelize.INTEGER","unique":true,"primaryKey":true,"autoIncrement":true},"title":{"seqType":"Sequelize.STRING","allowNull":false},"lectures_number":{"seqType":"Sequelize.INTEGER","allowNull":false},"practical_number":{"seqType":"Sequelize.INTEGER","allowNull":false},"laboratory_number":{"seqType":"Sequelize.INTEGER","allowNull":false},"discipline_academic_plan_id":{"seqType":"Sequelize.INTEGER","allowNull":true,"references":{"model":"discipline_academic_plans","key":"id"},"onUpdate":"CASCADE","onDelete":"SET NULL"}},"indexes":{}},"tasks":{"tableName":"tasks","schema":{"id":{"seqType":"Sequelize.INTEGER","unique":true,"primaryKey":true,"autoIncrement":true},"topic":{"seqType":"Sequelize.STRING","allowNull":false},"description":{"seqType":"Sequelize.STRING","allowNull":false},"is_obligatory":{"seqType":"Sequelize.BOOLEAN","allowNull":false},"lectures_number":{"seqType":"Sequelize.INTEGER","allowNull":false},"practical_number":{"seqType":"Sequelize.INTEGER","allowNull":false},"laboratory_number":{"seqType":"Sequelize.INTEGER","allowNull":false},"academic_module_id":{"seqType":"Sequelize.INTEGER","allowNull":true,"references":{"model":"academic_modules","key":"id"},"onUpdate":"CASCADE","onDelete":"SET NULL"}},"indexes":{}},"grades":{"tableName":"grades","schema":{"id":{"seqType":"Sequelize.INTEGER","unique":true,"primaryKey":true,"autoIncrement":true},"value":{"seqType":"Sequelize.DOUBLE","allowNull":false},"student_id":{"seqType":"Sequelize.INTEGER","allowNull":true,"references":{"model":"students","key":"id"},"onUpdate":"CASCADE","onDelete":"SET NULL"},"task_id":{"seqType":"Sequelize.INTEGER","allowNull":true,"references":{"model":"tasks","key":"id"},"onUpdate":"CASCADE","onDelete":"SET NULL"}},"indexes":{}},"roles":{"tableName":"roles","schema":{"id":{"seqType":"Sequelize.INTEGER","unique":true,"primaryKey":true,"autoIncrement":true},"title":{"seqType":"Sequelize.STRING","allowNull":false}},"indexes":{}},"teacher_disciplines":{"tableName":"teacher_disciplines","schema":{"id":{"seqType":"Sequelize.INTEGER","unique":true,"primaryKey":true,"autoIncrement":true},"class_type":{"seqType":"Sequelize.STRING","allowNull":false},"teacher_id":{"seqType":"Sequelize.INTEGER","allowNull":true,"references":{"model":"teachers","key":"id"},"onUpdate":"CASCADE","onDelete":"SET NULL"},"discipline_academic_plan_id":{"seqType":"Sequelize.INTEGER","allowNull":true,"references":{"model":"discipline_academic_plans","key":"id"},"onUpdate":"CASCADE","onDelete":"SET NULL"}},"indexes":{}},"student_subgroups":{"tableName":"student_subgroups","schema":{"id":{"seqType":"Sequelize.INTEGER","unique":true,"primaryKey":true,"autoIncrement":true},"student_id":{"seqType":"Sequelize.INTEGER","unique":"student_subgroups_subgroup_id_student_id_unique","references":{"model":"students","key":"id"},"onUpdate":"CASCADE","onDelete":"CASCADE"},"subgroup_id":{"seqType":"Sequelize.INTEGER","unique":"student_subgroups_subgroup_id_student_id_unique","references":{"model":"subgroups","key":"id"},"onUpdate":"CASCADE","onDelete":"CASCADE"}},"indexes":{}},"user_roles":{"tableName":"user_roles","schema":{"id":{"seqType":"Sequelize.INTEGER","unique":true,"primaryKey":true,"autoIncrement":true},"user_id":{"seqType":"Sequelize.INTEGER","unique":"user_roles_role_id_user_id_unique","references":{"model":"users","key":"id"},"onUpdate":"CASCADE","onDelete":"CASCADE"},"role_id":{"seqType":"Sequelize.INTEGER","unique":"user_roles_role_id_user_id_unique","references":{"model":"roles","key":"id"},"onUpdate":"CASCADE","onDelete":"CASCADE"}},"indexes":{}}}}'
            }],
            {}
        ]
    },




    {
        fn: "createTable",
        params: [
            "specialties",
            {
                "id": {
                    "autoIncrement": true,
                    "primaryKey": true,
                    "unique": true,
                    "type": Sequelize.INTEGER
                },
                "title": {
                    "allowNull": false,
                    "type": Sequelize.STRING
                },
                "short_title": {
                    "allowNull": false,
                    "type": Sequelize.STRING
                }
            },
            {}
        ]
    },

    {
        fn: "createTable",
        params: [
            "disciplines",
            {
                "id": {
                    "autoIncrement": true,
                    "primaryKey": true,
                    "unique": true,
                    "type": Sequelize.INTEGER
                },
                "title": {
                    "allowNull": false,
                    "type": Sequelize.STRING
                },
                "short_title": {
                    "allowNull": false,
                    "type": Sequelize.STRING
                }
            },
            {}
        ]
    },

    {
        fn: "createTable",
        params: [
            "users",
            {
                "id": {
                    "autoIncrement": true,
                    "primaryKey": true,
                    "unique": true,
                    "type": Sequelize.INTEGER
                },
                "login": {
                    "allowNull": false,
                    "type": Sequelize.STRING
                },
                "password": {
                    "allowNull": false,
                    "type": Sequelize.STRING
                }
            },
            {}
        ]
    },

    {
        fn: "createTable",
        params: [
            "departments",
            {
                "id": {
                    "autoIncrement": true,
                    "primaryKey": true,
                    "unique": true,
                    "type": Sequelize.INTEGER
                },
                "title": {
                    "allowNull": false,
                    "type": Sequelize.STRING
                },
                "short_title": {
                    "allowNull": false,
                    "type": Sequelize.STRING
                }
            },
            {}
        ]
    },

    {
        fn: "createTable",
        params: [
            "roles",
            {
                "id": {
                    "autoIncrement": true,
                    "primaryKey": true,
                    "unique": true,
                    "type": Sequelize.INTEGER
                },
                "title": {
                    "allowNull": false,
                    "type": Sequelize.STRING
                }
            },
            {}
        ]
    },

    {
        fn: "createTable",
        params: [
            "academic_plans",
            {
                "id": {
                    "autoIncrement": true,
                    "primaryKey": true,
                    "unique": true,
                    "type": Sequelize.INTEGER
                },
                "recruitment_year": {
                    "allowNull": false,
                    "type": Sequelize.STRING
                },
                "speciality_id": {
                    "onDelete": "SET NULL",
                    "onUpdate": "CASCADE",
                    "references": {
                        "model": "specialties",
                        "key": "id"
                    },
                    "allowNull": true,
                    "type": Sequelize.INTEGER
                }
            },
            {}
        ]
    },

    {
        fn: "createTable",
        params: [
            "groups",
            {
                "id": {
                    "autoIncrement": true,
                    "primaryKey": true,
                    "unique": true,
                    "type": Sequelize.INTEGER
                },
                "title": {
                    "allowNull": false,
                    "type": Sequelize.STRING
                },
                "academic_plan_id": {
                    "onDelete": "SET NULL",
                    "onUpdate": "CASCADE",
                    "references": {
                        "model": "academic_plans",
                        "key": "id"
                    },
                    "allowNull": true,
                    "type": Sequelize.INTEGER
                }
            },
            {}
        ]
    },

    {
        fn: "createTable",
        params: [
            "students",
            {
                "id": {
                    "autoIncrement": true,
                    "primaryKey": true,
                    "unique": true,
                    "type": Sequelize.INTEGER
                },
                "name": {
                    "allowNull": false,
                    "type": Sequelize.STRING
                },
                "surname": {
                    "allowNull": false,
                    "type": Sequelize.STRING
                },
                "patronymic": {
                    "allowNull": false,
                    "type": Sequelize.STRING
                },
                "code": {
                    "allowNull": false,
                    "type": Sequelize.STRING
                },
                "user_id": {
                    "onDelete": "SET NULL",
                    "onUpdate": "CASCADE",
                    "references": {
                        "model": "users",
                        "key": "id"
                    },
                    "allowNull": true,
                    "type": Sequelize.INTEGER
                }
            },
            {}
        ]
    },

    {
        fn: "createTable",
        params: [
            "subgroups",
            {
                "id": {
                    "autoIncrement": true,
                    "primaryKey": true,
                    "unique": true,
                    "type": Sequelize.INTEGER
                },
                "title": {
                    "allowNull": false,
                    "type": Sequelize.STRING
                },
                "group_id": {
                    "onDelete": "SET NULL",
                    "onUpdate": "CASCADE",
                    "references": {
                        "model": "groups",
                        "key": "id"
                    },
                    "allowNull": true,
                    "type": Sequelize.INTEGER
                }
            },
            {}
        ]
    },

    {
        fn: "createTable",
        params: [
            "teachers",
            {
                "id": {
                    "autoIncrement": true,
                    "primaryKey": true,
                    "unique": true,
                    "type": Sequelize.INTEGER
                },
                "name": {
                    "allowNull": false,
                    "type": Sequelize.STRING
                },
                "surname": {
                    "allowNull": false,
                    "type": Sequelize.STRING
                },
                "patronymic": {
                    "allowNull": false,
                    "type": Sequelize.STRING
                },
                "department_id": {
                    "onDelete": "SET NULL",
                    "onUpdate": "CASCADE",
                    "references": {
                        "model": "departments",
                        "key": "id"
                    },
                    "allowNull": true,
                    "type": Sequelize.INTEGER
                },
                "user_id": {
                    "onDelete": "SET NULL",
                    "onUpdate": "CASCADE",
                    "references": {
                        "model": "users",
                        "key": "id"
                    },
                    "allowNull": true,
                    "type": Sequelize.INTEGER
                }
            },
            {}
        ]
    },

    {
        fn: "createTable",
        params: [
            "discipline_academic_plans",
            {
                "id": {
                    "autoIncrement": true,
                    "primaryKey": true,
                    "unique": true,
                    "type": Sequelize.INTEGER
                },
                "semester": {
                    "allowNull": false,
                    "type": Sequelize.INTEGER
                },
                "lectures_number": {
                    "allowNull": false,
                    "type": Sequelize.INTEGER
                },
                "practical_number": {
                    "allowNull": false,
                    "type": Sequelize.INTEGER
                },
                "laboratory_number": {
                    "allowNull": false,
                    "type": Sequelize.INTEGER
                },
                "control_form": {
                    "allowNull": false,
                    "type": Sequelize.STRING
                },
                "discipline_id": {
                    "onDelete": "SET NULL",
                    "onUpdate": "CASCADE",
                    "references": {
                        "model": "disciplines",
                        "key": "id"
                    },
                    "allowNull": true,
                    "type": Sequelize.INTEGER
                },
                "department_id": {
                    "onDelete": "SET NULL",
                    "onUpdate": "CASCADE",
                    "references": {
                        "model": "departments",
                        "key": "id"
                    },
                    "allowNull": true,
                    "type": Sequelize.INTEGER
                },
                "academic_plan_id": {
                    "onDelete": "SET NULL",
                    "onUpdate": "CASCADE",
                    "references": {
                        "model": "academic_plans",
                        "key": "id"
                    },
                    "allowNull": true,
                    "type": Sequelize.INTEGER
                }
            },
            {}
        ]
    },

    {
        fn: "createTable",
        params: [
            "academic_modules",
            {
                "id": {
                    "autoIncrement": true,
                    "primaryKey": true,
                    "unique": true,
                    "type": Sequelize.INTEGER
                },
                "title": {
                    "allowNull": false,
                    "type": Sequelize.STRING
                },
                "lectures_number": {
                    "allowNull": false,
                    "type": Sequelize.INTEGER
                },
                "practical_number": {
                    "allowNull": false,
                    "type": Sequelize.INTEGER
                },
                "laboratory_number": {
                    "allowNull": false,
                    "type": Sequelize.INTEGER
                },
                "discipline_academic_plan_id": {
                    "onDelete": "SET NULL",
                    "onUpdate": "CASCADE",
                    "references": {
                        "model": "discipline_academic_plans",
                        "key": "id"
                    },
                    "allowNull": true,
                    "type": Sequelize.INTEGER
                }
            },
            {}
        ]
    },

    {
        fn: "createTable",
        params: [
            "tasks",
            {
                "id": {
                    "autoIncrement": true,
                    "primaryKey": true,
                    "unique": true,
                    "type": Sequelize.INTEGER
                },
                "topic": {
                    "allowNull": false,
                    "type": Sequelize.STRING
                },
                "description": {
                    "allowNull": false,
                    "type": Sequelize.STRING
                },
                "is_obligatory": {
                    "allowNull": false,
                    "type": Sequelize.BOOLEAN
                },
                "lectures_number": {
                    "allowNull": false,
                    "type": Sequelize.INTEGER
                },
                "practical_number": {
                    "allowNull": false,
                    "type": Sequelize.INTEGER
                },
                "laboratory_number": {
                    "allowNull": false,
                    "type": Sequelize.INTEGER
                },
                "academic_module_id": {
                    "onDelete": "SET NULL",
                    "onUpdate": "CASCADE",
                    "references": {
                        "model": "academic_modules",
                        "key": "id"
                    },
                    "allowNull": true,
                    "type": Sequelize.INTEGER
                }
            },
            {}
        ]
    },

    {
        fn: "createTable",
        params: [
            "grades",
            {
                "id": {
                    "autoIncrement": true,
                    "primaryKey": true,
                    "unique": true,
                    "type": Sequelize.INTEGER
                },
                "value": {
                    "allowNull": false,
                    "type": Sequelize.DOUBLE
                },
                "student_id": {
                    "onDelete": "SET NULL",
                    "onUpdate": "CASCADE",
                    "references": {
                        "model": "students",
                        "key": "id"
                    },
                    "allowNull": true,
                    "type": Sequelize.INTEGER
                },
                "task_id": {
                    "onDelete": "SET NULL",
                    "onUpdate": "CASCADE",
                    "references": {
                        "model": "tasks",
                        "key": "id"
                    },
                    "allowNull": true,
                    "type": Sequelize.INTEGER
                }
            },
            {}
        ]
    },

    {
        fn: "createTable",
        params: [
            "teacher_disciplines",
            {
                "id": {
                    "autoIncrement": true,
                    "primaryKey": true,
                    "unique": true,
                    "type": Sequelize.INTEGER
                },
                "class_type": {
                    "allowNull": false,
                    "type": Sequelize.STRING
                },
                "teacher_id": {
                    "onDelete": "SET NULL",
                    "onUpdate": "CASCADE",
                    "references": {
                        "model": "teachers",
                        "key": "id"
                    },
                    "allowNull": true,
                    "type": Sequelize.INTEGER
                },
                "discipline_academic_plan_id": {
                    "onDelete": "SET NULL",
                    "onUpdate": "CASCADE",
                    "references": {
                        "model": "discipline_academic_plans",
                        "key": "id"
                    },
                    "allowNull": true,
                    "type": Sequelize.INTEGER
                }
            },
            {}
        ]
    },

    {
        fn: "createTable",
        params: [
            "student_subgroups",
            {
                "id": {
                    "autoIncrement": true,
                    "primaryKey": true,
                    "unique": true,
                    "type": Sequelize.INTEGER
                },
                "student_id": {
                    "onDelete": "CASCADE",
                    "onUpdate": "CASCADE",
                    "references": {
                        "model": "students",
                        "key": "id"
                    },
                    "unique": "student_subgroups_subgroup_id_student_id_unique",
                    "type": Sequelize.INTEGER
                },
                "subgroup_id": {
                    "onDelete": "CASCADE",
                    "onUpdate": "CASCADE",
                    "references": {
                        "model": "subgroups",
                        "key": "id"
                    },
                    "unique": "student_subgroups_subgroup_id_student_id_unique",
                    "type": Sequelize.INTEGER
                }
            },
            {}
        ]
    },

    {
        fn: "createTable",
        params: [
            "user_roles",
            {
                "id": {
                    "autoIncrement": true,
                    "primaryKey": true,
                    "unique": true,
                    "type": Sequelize.INTEGER
                },
                "user_id": {
                    "onDelete": "CASCADE",
                    "onUpdate": "CASCADE",
                    "references": {
                        "model": "users",
                        "key": "id"
                    },
                    "unique": "user_roles_role_id_user_id_unique",
                    "type": Sequelize.INTEGER
                },
                "role_id": {
                    "onDelete": "CASCADE",
                    "onUpdate": "CASCADE",
                    "references": {
                        "model": "roles",
                        "key": "id"
                    },
                    "unique": "user_roles_role_id_user_id_unique",
                    "type": Sequelize.INTEGER
                }
            },
            {}
        ]
    }
];

const rollbackCommands = [

    {
        fn: "bulkDelete",
        params: [
            "SequelizeMigrationsMeta",
            [{
                revision: info.revision,
            }],
            {}
        ]
    },



    {
        fn: "dropTable",
        params: ["academic_plans"]
    },
    {
        fn: "dropTable",
        params: ["groups"]
    },
    {
        fn: "dropTable",
        params: ["students"]
    },
    {
        fn: "dropTable",
        params: ["subgroups"]
    },
    {
        fn: "dropTable",
        params: ["teachers"]
    },
    {
        fn: "dropTable",
        params: ["discipline_academic_plans"]
    },
    {
        fn: "dropTable",
        params: ["academic_modules"]
    },
    {
        fn: "dropTable",
        params: ["tasks"]
    },
    {
        fn: "dropTable",
        params: ["grades"]
    },
    {
        fn: "dropTable",
        params: ["teacher_disciplines"]
    },
    {
        fn: "dropTable",
        params: ["student_subgroups"]
    },
    {
        fn: "dropTable",
        params: ["user_roles"]
    },
    {
        fn: "dropTable",
        params: ["specialties"]
    },
    {
        fn: "dropTable",
        params: ["disciplines"]
    },
    {
        fn: "dropTable",
        params: ["users"]
    },
    {
        fn: "dropTable",
        params: ["departments"]
    },
    {
        fn: "dropTable",
        params: ["roles"]
    }
];

module.exports = {
  pos: 0,
  up: function(queryInterface, Sequelize) {
    let index = this.pos;

    return new Promise(function(resolve, reject) {
      function next() {
        if (index < migrationCommands.length) {
          let command = migrationCommands[index];
          console.log("[#"+index+"] execute: " + command.fn);
          index++;
          queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
        } else resolve();
      }

      next();
    });
  },
  down: function(queryInterface, Sequelize) {
    let index = this.pos;

    return new Promise(function(resolve, reject) {
      function next() {
        if (index < rollbackCommands.length) {
          let command = rollbackCommands[index];
          console.log("[#"+index+"] execute: " + command.fn);
          index++;
          queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
        }
        else resolve();
      }

      next();
    });
  },
  info
};
