import Fastify from 'fastify'
import fastifyStatic from '@fastify/static'
import path from 'node:path'
import fastifyPostgres from '@fastify/postgres'
import { loadEnvFile } from 'node:process'

loadEnvFile('.env')

const __dirname = import.meta.dirname

const fastify = Fastify({
  logger: true,
})

fastify.register(fastifyPostgres, {
  connectionString: process.env.CONNECTION_STRING,
})

fastify.register(fastifyStatic, {
  root: path.join(__dirname, '../builds'),
})

fastify.get('/admin', (request, reply) => {
  reply.sendFile('admin/index.html')
})

fastify.get('/admin/*', (request, reply) => {
  reply.sendFile('admin/index.html')
})

fastify.get('/publications', (request, reply) => {
  reply.sendFile('public/index.html')
})

fastify.get('/publications/*', (request, reply) => {
  reply.sendFile('public/index.html')
})

fastify.get('/apiv1/teachers', (req, reply) => {
  fastify.pg.query(
    'SELECT * from teachers',
    (err, result) => reply.send(err || result.rows))
})

fastify.get('/apiv1/teachers/lessons', (req, reply) => {
  reply.send(`{
    "startDate": "2025-12-15T00:00:00Z",
    "endDate": "2025-12-21T00:00:00Z",
    "teacher": {
        "id": 170,
        "fio": "Сизов С.Е",
        "position": null
    },
    "lessons": [
        {
            "id": "03653273-8b31-4e08-ab8f-c2cb1090dd57",
            "weekday": 1,
            "lesson": 3,
            "startTime": "12:40",
            "endTime": "14:10",
            "startTimeMin": 760,
            "endTimeMin": 850,
            "unionGroups": [
                {
                    "id": "011d3362-304a-4ddd-b877-0adc08b62f53",
                    "group": {
                        "id": 18,
                        "name": "03-23.ИСИП.ОД.11"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                },
                {
                    "id": "be0183e1-0bd0-432d-b217-75041f18f6b0",
                    "group": {
                        "id": 130,
                        "name": "3101-Д-9"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                }
            ],
            "teachers": [
                {
                    "id": 170,
                    "fio": "Сизов С.Е",
                    "position": null,
                    "lessons": null,
                    "publication": null
                }
            ],
            "typeLesson": null,
            "subject": {
                "id": 24,
                "name": "МДК.01.01 Разработка программных модулей",
                "infoUrl": null,
                "publication": null
            },
            "cabinet": null
        },
        {
            "id": "077d018d-b8d7-4891-bdea-7f22dcb8b2c9",
            "weekday": 5,
            "lesson": 1,
            "startTime": "09:00",
            "endTime": "10:30",
            "startTimeMin": 540,
            "endTimeMin": 630,
            "unionGroups": [
                {
                    "id": "cca49ce6-4ed8-475a-9bf7-5655711fd089",
                    "group": {
                        "id": 16,
                        "name": "01-24.ИСИП.ОД.11, 15.ИСИП.24.ОФ.С.3.ХК.Д"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                }
            ],
            "teachers": [
                {
                    "id": 170,
                    "fio": "Сизов С.Е",
                    "position": null,
                    "lessons": null,
                    "publication": null
                }
            ],
            "typeLesson": null,
            "subject": {
                "id": 24,
                "name": "МДК.01.01 Разработка программных модулей",
                "infoUrl": null,
                "publication": null
            },
            "cabinet": null
        },
        {
            "id": "0a54b04e-2651-4db6-b0fb-02d59e950193",
            "weekday": 5,
            "lesson": 4,
            "startTime": "14:20",
            "endTime": "15:50",
            "startTimeMin": 860,
            "endTimeMin": 950,
            "unionGroups": [
                {
                    "id": "02daadb3-a47d-4589-80e4-96fa11751ee7",
                    "group": {
                        "id": 83,
                        "name": "15.ИСиП.22.ОФ.О.2.ХК"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                },
                {
                    "id": "2f4518e5-1054-4bda-8116-c9d0e2bfc406",
                    "group": {
                        "id": 67,
                        "name": "15.ИСиП.22.ОФ.О.1.ХК"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                }
            ],
            "teachers": [
                {
                    "id": 170,
                    "fio": "Сизов С.Е",
                    "position": null,
                    "lessons": null,
                    "publication": null
                }
            ],
            "typeLesson": null,
            "subject": {
                "id": 171,
                "name": "Консультация к экзамену",
                "infoUrl": null,
                "publication": null
            },
            "cabinet": null
        },
        {
            "id": "10697f58-7e21-4865-ab38-55880ea98d77",
            "weekday": 1,
            "lesson": 5,
            "startTime": "16:00",
            "endTime": "17:30",
            "startTimeMin": 960,
            "endTimeMin": 1050,
            "unionGroups": [
                {
                    "id": "d045ea7c-d199-4dea-a97f-137c91627e3e",
                    "group": {
                        "id": 16,
                        "name": "01-24.ИСИП.ОД.11, 15.ИСИП.24.ОФ.С.3.ХК.Д"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                }
            ],
            "teachers": [
                {
                    "id": 170,
                    "fio": "Сизов С.Е",
                    "position": null,
                    "lessons": null,
                    "publication": null
                }
            ],
            "typeLesson": null,
            "subject": {
                "id": 30,
                "name": "МДК.02.01 Технология разработки программного обеспечения",
                "infoUrl": null,
                "publication": null
            },
            "cabinet": null
        },
        {
            "id": "153566d3-608c-4b63-b576-423c0568cc4d",
            "weekday": 4,
            "lesson": 8,
            "startTime": "20:40",
            "endTime": "22:10",
            "startTimeMin": 1240,
            "endTimeMin": 1330,
            "unionGroups": [
                {
                    "id": "673cd308-0aa9-4d88-a03b-8156340386da",
                    "group": {
                        "id": 79,
                        "name": "15.ИСИП.24.О-ЗФ.С.1.ХК"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                },
                {
                    "id": "b8df4eed-6174-42a5-a5b4-a67fa8a79dbc",
                    "group": {
                        "id": 51,
                        "name": "15.ИСиП.23.О-ЗФ.О.1.ХК"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                },
                {
                    "id": "ed18e573-d233-4a69-b415-65b4382fefd1",
                    "group": {
                        "id": 33,
                        "name": "01-24.ИСИП.ОЗ.11, 01-23.ИСИП.ОЗ.9, 02-24.ИСИП.ОЗ.11"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                }
            ],
            "teachers": [
                {
                    "id": 170,
                    "fio": "Сизов С.Е",
                    "position": null,
                    "lessons": null,
                    "publication": null
                }
            ],
            "typeLesson": null,
            "subject": {
                "id": 24,
                "name": "МДК.01.01 Разработка программных модулей",
                "infoUrl": null,
                "publication": null
            },
            "cabinet": null
        },
        {
            "id": "370cb6fb-add2-4190-97b7-366af91be386",
            "weekday": 2,
            "lesson": 5,
            "startTime": "16:00",
            "endTime": "17:30",
            "startTimeMin": 960,
            "endTimeMin": 1050,
            "unionGroups": [
                {
                    "id": "efa260a5-7d57-436f-8c97-29571ed8b030",
                    "group": {
                        "id": 16,
                        "name": "01-24.ИСИП.ОД.11, 15.ИСИП.24.ОФ.С.3.ХК.Д"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                }
            ],
            "teachers": [
                {
                    "id": 170,
                    "fio": "Сизов С.Е",
                    "position": null,
                    "lessons": null,
                    "publication": null
                }
            ],
            "typeLesson": null,
            "subject": {
                "id": 24,
                "name": "МДК.01.01 Разработка программных модулей",
                "infoUrl": null,
                "publication": null
            },
            "cabinet": null
        },
        {
            "id": "581699ce-117a-4505-80ce-28ad7a5e2111",
            "weekday": 3,
            "lesson": 7,
            "startTime": "19:05",
            "endTime": "20:35",
            "startTimeMin": 1145,
            "endTimeMin": 1235,
            "unionGroups": [
                {
                    "id": "1a4966a0-9298-42d2-b8a4-f2260eba082f",
                    "group": {
                        "id": 33,
                        "name": "01-24.ИСИП.ОЗ.11, 01-23.ИСИП.ОЗ.9, 02-24.ИСИП.ОЗ.11"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                },
                {
                    "id": "4092dc0a-a1e6-4469-9847-15e38d151986",
                    "group": {
                        "id": 79,
                        "name": "15.ИСИП.24.О-ЗФ.С.1.ХК"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                },
                {
                    "id": "e671f960-1a18-4836-ae87-2ed3ff269cf7",
                    "group": {
                        "id": 51,
                        "name": "15.ИСиП.23.О-ЗФ.О.1.ХК"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                }
            ],
            "teachers": [
                {
                    "id": 170,
                    "fio": "Сизов С.Е",
                    "position": null,
                    "lessons": null,
                    "publication": null
                }
            ],
            "typeLesson": null,
            "subject": {
                "id": 24,
                "name": "МДК.01.01 Разработка программных модулей",
                "infoUrl": null,
                "publication": null
            },
            "cabinet": null
        },
        {
            "id": "5abf45f6-4a73-4832-934b-312d69d8c3fc",
            "weekday": 4,
            "lesson": 7,
            "startTime": "19:05",
            "endTime": "20:35",
            "startTimeMin": 1145,
            "endTimeMin": 1235,
            "unionGroups": [
                {
                    "id": "6bf34f2d-f87b-4dbd-ac50-674e072c5995",
                    "group": {
                        "id": 33,
                        "name": "01-24.ИСИП.ОЗ.11, 01-23.ИСИП.ОЗ.9, 02-24.ИСИП.ОЗ.11"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                },
                {
                    "id": "9870c437-494a-457b-ba74-89623bfa2963",
                    "group": {
                        "id": 79,
                        "name": "15.ИСИП.24.О-ЗФ.С.1.ХК"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                },
                {
                    "id": "d8b87452-1a87-4144-80f6-0a877c88b783",
                    "group": {
                        "id": 51,
                        "name": "15.ИСиП.23.О-ЗФ.О.1.ХК"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                }
            ],
            "teachers": [
                {
                    "id": 170,
                    "fio": "Сизов С.Е",
                    "position": null,
                    "lessons": null,
                    "publication": null
                }
            ],
            "typeLesson": null,
            "subject": {
                "id": 24,
                "name": "МДК.01.01 Разработка программных модулей",
                "infoUrl": null,
                "publication": null
            },
            "cabinet": null
        },
        {
            "id": "5e22122e-c176-496a-94cd-f1bee5a87488",
            "weekday": 3,
            "lesson": 8,
            "startTime": "20:40",
            "endTime": "22:10",
            "startTimeMin": 1240,
            "endTimeMin": 1330,
            "unionGroups": [
                {
                    "id": "29400f95-94f5-481c-b0c4-cbe74a88b024",
                    "group": {
                        "id": 79,
                        "name": "15.ИСИП.24.О-ЗФ.С.1.ХК"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                },
                {
                    "id": "83cd1eec-ecd8-4f7a-901f-1c57bedd16f0",
                    "group": {
                        "id": 33,
                        "name": "01-24.ИСИП.ОЗ.11, 01-23.ИСИП.ОЗ.9, 02-24.ИСИП.ОЗ.11"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                },
                {
                    "id": "e11348a9-767c-4583-98a6-68ee5baec8ae",
                    "group": {
                        "id": 51,
                        "name": "15.ИСиП.23.О-ЗФ.О.1.ХК"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                }
            ],
            "teachers": [
                {
                    "id": 170,
                    "fio": "Сизов С.Е",
                    "position": null,
                    "lessons": null,
                    "publication": null
                }
            ],
            "typeLesson": null,
            "subject": {
                "id": 24,
                "name": "МДК.01.01 Разработка программных модулей",
                "infoUrl": null,
                "publication": null
            },
            "cabinet": null
        },
        {
            "id": "6c24d1c2-0594-452e-baa2-c62d07285efb",
            "weekday": 3,
            "lesson": 3,
            "startTime": "12:40",
            "endTime": "14:10",
            "startTimeMin": 760,
            "endTimeMin": 850,
            "unionGroups": [
                {
                    "id": "d97cb2fc-4dd2-46a0-a3b8-17efdd34df1a",
                    "group": {
                        "id": 16,
                        "name": "01-24.ИСИП.ОД.11, 15.ИСИП.24.ОФ.С.3.ХК.Д"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                }
            ],
            "teachers": [
                {
                    "id": 170,
                    "fio": "Сизов С.Е",
                    "position": null,
                    "lessons": null,
                    "publication": null
                }
            ],
            "typeLesson": null,
            "subject": {
                "id": 30,
                "name": "МДК.02.01 Технология разработки программного обеспечения",
                "infoUrl": null,
                "publication": null
            },
            "cabinet": null
        },
        {
            "id": "7680f365-7a2d-4260-a9d6-fa76fba3f743",
            "weekday": 1,
            "lesson": 8,
            "startTime": "20:40",
            "endTime": "22:10",
            "startTimeMin": 1240,
            "endTimeMin": 1330,
            "unionGroups": [
                {
                    "id": "32bb2d59-6425-46fe-be08-c271fdb6c090",
                    "group": {
                        "id": 51,
                        "name": "15.ИСиП.23.О-ЗФ.О.1.ХК"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                },
                {
                    "id": "8c6db411-c05a-409f-944a-d9ae8c6787c7",
                    "group": {
                        "id": 33,
                        "name": "01-24.ИСИП.ОЗ.11, 01-23.ИСИП.ОЗ.9, 02-24.ИСИП.ОЗ.11"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                },
                {
                    "id": "ce7da5ab-36c0-4ad9-ada8-28de650494eb",
                    "group": {
                        "id": 79,
                        "name": "15.ИСИП.24.О-ЗФ.С.1.ХК"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                }
            ],
            "teachers": [
                {
                    "id": 170,
                    "fio": "Сизов С.Е",
                    "position": null,
                    "lessons": null,
                    "publication": null
                }
            ],
            "typeLesson": null,
            "subject": {
                "id": 24,
                "name": "МДК.01.01 Разработка программных модулей",
                "infoUrl": null,
                "publication": null
            },
            "cabinet": null
        },
        {
            "id": "81b6ce23-c766-4633-ad09-78daaef2a000",
            "weekday": 3,
            "lesson": 6,
            "startTime": "17:35",
            "endTime": "19:05",
            "startTimeMin": 1055,
            "endTimeMin": 1145,
            "unionGroups": [
                {
                    "id": "49aa30a6-af5a-485d-afa6-119ae1d9274b",
                    "group": {
                        "id": 16,
                        "name": "01-24.ИСИП.ОД.11, 15.ИСИП.24.ОФ.С.3.ХК.Д"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                }
            ],
            "teachers": [
                {
                    "id": 170,
                    "fio": "Сизов С.Е",
                    "position": null,
                    "lessons": null,
                    "publication": null
                }
            ],
            "typeLesson": null,
            "subject": {
                "id": 30,
                "name": "МДК.02.01 Технология разработки программного обеспечения",
                "infoUrl": null,
                "publication": null
            },
            "cabinet": null
        },
        {
            "id": "8442570a-f6c1-4299-bc8f-17d34566c5bf",
            "weekday": 1,
            "lesson": 7,
            "startTime": "19:05",
            "endTime": "20:35",
            "startTimeMin": 1145,
            "endTimeMin": 1235,
            "unionGroups": [
                {
                    "id": "3ebd773d-f7df-47a7-89c7-243a8850229b",
                    "group": {
                        "id": 79,
                        "name": "15.ИСИП.24.О-ЗФ.С.1.ХК"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                },
                {
                    "id": "e6643dd5-e35f-43f2-a308-d60c3c22d55e",
                    "group": {
                        "id": 33,
                        "name": "01-24.ИСИП.ОЗ.11, 01-23.ИСИП.ОЗ.9, 02-24.ИСИП.ОЗ.11"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                },
                {
                    "id": "f4cacc1b-0bc8-4d40-812d-7174b19184cf",
                    "group": {
                        "id": 51,
                        "name": "15.ИСиП.23.О-ЗФ.О.1.ХК"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                }
            ],
            "teachers": [
                {
                    "id": 170,
                    "fio": "Сизов С.Е",
                    "position": null,
                    "lessons": null,
                    "publication": null
                }
            ],
            "typeLesson": null,
            "subject": {
                "id": 24,
                "name": "МДК.01.01 Разработка программных модулей",
                "infoUrl": null,
                "publication": null
            },
            "cabinet": null
        },
        {
            "id": "860824bc-172f-4239-ab0c-e5e06767f460",
            "weekday": 3,
            "lesson": 5,
            "startTime": "16:00",
            "endTime": "17:30",
            "startTimeMin": 960,
            "endTimeMin": 1050,
            "unionGroups": [
                {
                    "id": "029e04a7-b35b-45bd-956d-1f1051942c4a",
                    "group": {
                        "id": 16,
                        "name": "01-24.ИСИП.ОД.11, 15.ИСИП.24.ОФ.С.3.ХК.Д"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                }
            ],
            "teachers": [
                {
                    "id": 170,
                    "fio": "Сизов С.Е",
                    "position": null,
                    "lessons": null,
                    "publication": null
                }
            ],
            "typeLesson": null,
            "subject": {
                "id": 24,
                "name": "МДК.01.01 Разработка программных модулей",
                "infoUrl": null,
                "publication": null
            },
            "cabinet": null
        },
        {
            "id": "910ba5f1-1d24-4e6e-b7b3-8f4866371384",
            "weekday": 2,
            "lesson": 2,
            "startTime": "10:40",
            "endTime": "12:10",
            "startTimeMin": 640,
            "endTimeMin": 730,
            "unionGroups": [
                {
                    "id": "118b65f3-c252-42dd-8621-d6b7d4be77cc",
                    "group": {
                        "id": 81,
                        "name": "15.ИСиП.23.ОФ.С.3.ХК"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                },
                {
                    "id": "5e9e10b2-bd24-44df-b63f-9b8fb06422dd",
                    "group": {
                        "id": 59,
                        "name": "15.ИСиП.23.ОФ.С.2.ХК"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                }
            ],
            "teachers": [
                {
                    "id": 170,
                    "fio": "Сизов С.Е",
                    "position": null,
                    "lessons": null,
                    "publication": null
                }
            ],
            "typeLesson": null,
            "subject": {
                "id": 24,
                "name": "МДК.01.01 Разработка программных модулей",
                "infoUrl": null,
                "publication": null
            },
            "cabinet": null
        },
        {
            "id": "9e6d4332-ec57-4c22-bef7-fa659ea212cc",
            "weekday": 3,
            "lesson": 4,
            "startTime": "14:20",
            "endTime": "15:50",
            "startTimeMin": 860,
            "endTimeMin": 950,
            "unionGroups": [
                {
                    "id": "d01413f8-d822-445c-8050-339525308187",
                    "group": {
                        "id": 16,
                        "name": "01-24.ИСИП.ОД.11, 15.ИСИП.24.ОФ.С.3.ХК.Д"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                }
            ],
            "teachers": [
                {
                    "id": 170,
                    "fio": "Сизов С.Е",
                    "position": null,
                    "lessons": null,
                    "publication": null
                }
            ],
            "typeLesson": null,
            "subject": {
                "id": 30,
                "name": "МДК.02.01 Технология разработки программного обеспечения",
                "infoUrl": null,
                "publication": null
            },
            "cabinet": null
        },
        {
            "id": "aec7f7dd-6da2-4101-95ed-e4f626304797",
            "weekday": 2,
            "lesson": 3,
            "startTime": "12:40",
            "endTime": "14:10",
            "startTimeMin": 760,
            "endTimeMin": 850,
            "unionGroups": [
                {
                    "id": "9d795a24-3ee8-4f48-b10d-772f7113bba7",
                    "group": {
                        "id": 130,
                        "name": "3101-Д-9"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                },
                {
                    "id": "ed570ba1-f447-48cb-9887-76e4d5594b6a",
                    "group": {
                        "id": 18,
                        "name": "03-23.ИСИП.ОД.11"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                }
            ],
            "teachers": [
                {
                    "id": 170,
                    "fio": "Сизов С.Е",
                    "position": null,
                    "lessons": null,
                    "publication": null
                }
            ],
            "typeLesson": null,
            "subject": {
                "id": 24,
                "name": "МДК.01.01 Разработка программных модулей",
                "infoUrl": null,
                "publication": null
            },
            "cabinet": null
        },
        {
            "id": "afb1fd11-60f2-4962-9156-4ee2c5fe7aa6",
            "weekday": 1,
            "lesson": 4,
            "startTime": "14:20",
            "endTime": "15:50",
            "startTimeMin": 860,
            "endTimeMin": 950,
            "unionGroups": [
                {
                    "id": "1d425bdb-5497-471a-aad3-3945470bf64a",
                    "group": {
                        "id": 130,
                        "name": "3101-Д-9"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                },
                {
                    "id": "c2824670-0adb-4ac4-b9fa-bc89b7fca050",
                    "group": {
                        "id": 18,
                        "name": "03-23.ИСИП.ОД.11"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                }
            ],
            "teachers": [
                {
                    "id": 170,
                    "fio": "Сизов С.Е",
                    "position": null,
                    "lessons": null,
                    "publication": null
                }
            ],
            "typeLesson": null,
            "subject": {
                "id": 24,
                "name": "МДК.01.01 Разработка программных модулей",
                "infoUrl": null,
                "publication": null
            },
            "cabinet": null
        },
        {
            "id": "b17dfe73-60f1-4cf9-9d1f-a109cf0898e5",
            "weekday": 2,
            "lesson": 6,
            "startTime": "17:35",
            "endTime": "19:05",
            "startTimeMin": 1055,
            "endTimeMin": 1145,
            "unionGroups": [
                {
                    "id": "0f76d17e-5633-4170-95bf-ec4320b7dafb",
                    "group": {
                        "id": 16,
                        "name": "01-24.ИСИП.ОД.11, 15.ИСИП.24.ОФ.С.3.ХК.Д"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                }
            ],
            "teachers": [
                {
                    "id": 170,
                    "fio": "Сизов С.Е",
                    "position": null,
                    "lessons": null,
                    "publication": null
                }
            ],
            "typeLesson": null,
            "subject": {
                "id": 24,
                "name": "МДК.01.01 Разработка программных модулей",
                "infoUrl": null,
                "publication": null
            },
            "cabinet": null
        },
        {
            "id": "bd77cb41-1902-4f1c-adbe-d3a95526644b",
            "weekday": 4,
            "lesson": 4,
            "startTime": "14:20",
            "endTime": "15:50",
            "startTimeMin": 860,
            "endTimeMin": 950,
            "unionGroups": [
                {
                    "id": "d51894c0-9b99-418c-8696-a741dae9916b",
                    "group": {
                        "id": 18,
                        "name": "03-23.ИСИП.ОД.11"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                },
                {
                    "id": "ee313761-2228-4a0c-b7d4-7af2a56e4d79",
                    "group": {
                        "id": 130,
                        "name": "3101-Д-9"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                }
            ],
            "teachers": [
                {
                    "id": 170,
                    "fio": "Сизов С.Е",
                    "position": null,
                    "lessons": null,
                    "publication": null
                }
            ],
            "typeLesson": null,
            "subject": {
                "id": 24,
                "name": "МДК.01.01 Разработка программных модулей",
                "infoUrl": null,
                "publication": null
            },
            "cabinet": null
        }
    ]
}`)
})

// Run the server!
try {
  await fastify.listen({ port: 3000 })
}
catch (err) {
  fastify.log.error(err)
  process.exit(1)
}
