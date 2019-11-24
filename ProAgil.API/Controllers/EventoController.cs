using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProAgil.API.Data;
using System.Threading.Tasks;

namespace ProAgil.API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class EventoController : ControllerBase
    {
        public readonly DataContext _context;
        public EventoController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try {
                var results = await _context.Eventos.ToListAsync();
                return Ok(results);
            } catch (System.Exception) {
                return this.StatusCode(
                    StatusCodes.Status500InternalServerError,
                    "Falha na consulta ao banco de dados"
                );
            }
            // return new Evento[] {
            //     new Evento(){
            //         eventoId = 1,
            //         tema = "Angular e .NET Core",
            //         local = "Ponta Grossa - PR",
            //         lote = "lote VIP",
            //         quantidadeDePessoas = 250,
            //         dataDoEvento = DateTime.Now.AddDays(2).ToString("dd/MM/yyyy")
            //     },
            //     new Evento(){
            //         eventoId = 1,
            //         tema = "Angular ou React",
            //         local = "Londrina - PR",
            //         lote = "lote VIP",
            //         quantidadeDePessoas = 300,
            //         dataDoEvento = DateTime.Now.AddDays(15).ToString("dd/MM/yyyy")
            //     }
            // };
        }

        [HttpGet("{id}")]
        public async Task<IActionResult>  Get(int id)
        {
            try {
                var results = await _context.Eventos.FirstOrDefaultAsync(x => x.eventoId == id);
                return Ok(results);
            } catch (System.Exception) {
                return this.StatusCode(
                    StatusCodes.Status500InternalServerError,
                    "Falha na consulta ao banco de dados"
                );
            }
            // return new Evento[] {
            //     new Evento(){
            //         eventoId = 1,
            //         tema = "Angular e .NET Core",
            //         local = "Ponta Grossa - PR",
            //         lote = "lote VIP",
            //         quantidadeDePessoas = 250,
            //         dataDoEvento = DateTime.Now.AddDays(2).ToString("dd/MM/yyyy")
            //     },
            //     new Evento(){
            //         eventoId = 2,
            //         tema = "Angular ou React",
            //         local = "Londrina - PR",
            //         lote = "lote VIP",
            //         quantidadeDePessoas = 300,
            //         dataDoEvento = DateTime.Now.AddDays(15).ToString("dd/MM/yyyy")
            //     }
            // }
        }
    }
}