export const buildDefaultBells = (lessonsInDay, lessonDurationMinutes = 90, breakMinutes = 10, startHour = 8, startMinute = 30) => {
  const bells = [];
  let currentTime = new Date();
  currentTime.setHours(startHour, startMinute, 0, 0);

  for (let i = 1; i <= lessonsInDay; i++) {
    const startTime = new Date(currentTime);
    const endTime = new Date(currentTime);
    endTime.setMinutes(endTime.getMinutes() + lessonDurationMinutes);

    bells.push({
      lessonNumber: i,
      startTime: startTime.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
      endTime: endTime.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
    });

    if (i < lessonsInDay) {
      currentTime.setMinutes(currentTime.getMinutes() + lessonDurationMinutes + breakMinutes);
    }
  }

  return bells;
};
