export default abstract class Store<Snapshot> {
  listeners = new Set<() => void>();

  snapshot = {} as Snapshot;

  addListener(listener: () => void) {
    this.listeners.add(listener);
  }

  removeListener(listener: () => void) {
    this.listeners.delete(listener);
  }

  getSnapshot() {
    return this.snapshot;
  }

  publish() {
    this.listeners.forEach((listener) => listener());
  }
}
