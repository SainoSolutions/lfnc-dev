import { EventService } from '../pages/Events/EventService';

class EventsCache {
  constructor() {
    this.cache = null;
    this.cacheTime = null;
    this.cacheDuration = 5 * 60 * 1000; // 5 minutes
    this.fetchPromise = null;
  }

  async getEvents() {
    // Return cached data if valid
    if (this.cache && this.cacheTime && (Date.now() - this.cacheTime < this.cacheDuration)) {
      return this.cache;
    }

    // If already fetching, return the same promise
    if (this.fetchPromise) {
      return this.fetchPromise;
    }

    // Fetch new data
    this.fetchPromise = EventService.getAllEvents()
      .then((data) => {
        this.cache = data;
        this.cacheTime = Date.now();
        this.fetchPromise = null;
        return data;
      })
      .catch((error) => {
        this.fetchPromise = null;
        throw error;
      });

    return this.fetchPromise;
  }

  prefetch() {
    // Prefetch in background without blocking
    if (!this.cache && !this.fetchPromise) {
      this.getEvents().catch(() => {});
    }
  }

  clearCache() {
    this.cache = null;
    this.cacheTime = null;
  }
}

export const eventsCache = new EventsCache();
