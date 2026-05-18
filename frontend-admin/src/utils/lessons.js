export const daysMap = {
  1: 'понедельник',
  2: 'вторник',
  3: 'среда',
  4: 'четверг',
  5: 'пятница',
  6: 'суббота',
  7: 'воскресенье',
};

export const pairsToArray = lessonsInDay => Array.from({ length: lessonsInDay }).map((e, i) => i);

export const scheduleLessonsToTable = (schedule) => {
  console.log('schedule', schedule);

  const groupsWithDays = schedule.groups.reduce((acc, elem) => {
    const weekdaysObject = schedule.schedule.weekdays.reduce((acc, elem) => ({ ...acc, [elem]: [] }), {});
    return { ...acc, [elem.id]: (structuredClone(weekdaysObject)) };
  }, {});
  const result = Object.keys(groupsWithDays).reduce((acc, elem) => {
    const lessonsInDay = pairsToArray(schedule.schedule.lessonsInDay);
    const days = Object.keys(groupsWithDays[elem]).reduce((acc, elem) => {
      return { ...acc, [elem]: lessonsInDay.slice() };
    }, {});
    return { ...acc, [elem]: days };
  }, {});

  schedule.scheduleLessons.forEach((lesson) => {
    console.log(1, lesson);
    const { groupId, weekday, lessonNumber } = lesson;
    console.log(2, groupId, weekday, lessonNumber);
    result[groupId][weekday][lessonNumber] = 111111111;
  },
  );
  console.log('result', result);
};
