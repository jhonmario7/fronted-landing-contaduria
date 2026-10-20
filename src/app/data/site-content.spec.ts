import { SITE_CONTENT } from './site-content';

describe('SITE_CONTENT', () => {
  const { services } = SITE_CONTENT;

  it('tiene los 11 servicios del portafolio con id único', () => {
    expect(services.length).toBe(11);
    expect(new Set(services.map((s) => s.id)).size).toBe(services.length);
  });

  it('cada servicio tiene detalle', () => {
    for (const s of services) {
      expect(s.groups.flatMap((g) => g.items).length, s.id).toBeGreaterThan(0);
    }
  });
});
