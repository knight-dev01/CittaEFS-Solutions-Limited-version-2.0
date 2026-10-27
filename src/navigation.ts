export function currentPath(): string {
  const path = window.location.pathname.replace(/\/+$/, '');
  return path === '' ? '/' : path;
}

function notify() {
  window.dispatchEvent(new Event('app:navigate'));
}

export function goTo(path: string) {
  if (currentPath() === path && !window.location.hash) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  window.history.pushState({}, '', path);
  notify();
  window.scrollTo({ top: 0 });
}

export function goToSection(id: string) {
  if (currentPath() !== '/') {
    window.history.pushState({}, '', `/#${id}`);
    notify();
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 80);
    return;
  }

  window.history.replaceState({}, '', id === 'home' ? '/' : `/#${id}`);
  const el = document.getElementById(id);
  if (id === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
