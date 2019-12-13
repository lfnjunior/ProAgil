using Microsoft.EntityFrameworkCore;
using ProAgil.Domain;

namespace ProAgil.Repository
{
    public class ProAgilContext : DbContext
    {
        public ProAgilContext(DbContextOptions<ProAgilContext> options) : base (options) {}
        public DbSet<Evento> Eventos { get; set; } 
        public DbSet<Palestrante> Palestrantes { get; set; } 
        public DbSet<PalestranteEvento> PalestrantesEventos { get; set; } 
        public DbSet<Lote> Lotes { get; set; } 
        public DbSet<RedeSocial> RedesSocials { get; set; } 
    }
}