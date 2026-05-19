import { fetchSchedules } from '../api/schedules';
import state from './state';

export async function initializeLocalState() {
  if (state.currentScheduleId !== null) {
    return;
  }

  const schedules = await fetchSchedules();

  if (schedules.length === 0) {
    return;
  }

  state.currentScheduleId = schedules[0].id;
}
