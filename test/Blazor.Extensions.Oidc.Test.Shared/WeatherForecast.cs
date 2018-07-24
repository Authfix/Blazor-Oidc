﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Blazor.Extensions.Oidc.Test.Shared
{
    public class WeatherForecast
    {
        public DateTime Date { get; set; }
        public int TemperatureC { get; set; }
        public string Summary { get; set; }
        public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
    }
}
