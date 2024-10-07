
const CalendarApp = () => {
  return (
    <div className="calendar-app">
      <div className="calendar">
        <h1 className="heading">Calendar</h1>
        <div className="navigate-date">
          {/* Class dos meses */}
          <h2 className="month">May,</h2>
          {/* Class dos anos */}
          <h2 className="year">2024</h2>
          {/* Class dos botoes */}
          <div className="buttons">
            {/* Botao para recuar mes */}
            <i className="bx bx-chevron-left"></i>
            {/* Botao para avançar mes */}
            <i className="bx bx-chevron-right"></i>
          </div>
        </div>
        {/* Class dos dias da semana */}
        <div className="weekdays">
          <span>DOM</span>
          <span>SEG</span>
          <span>TER</span>
          <span>QUAR</span>
          <span>QUIN</span>
          <span>SEX</span>
          <span>SAB</span>
        </div>
        {/* Class dos dias de cada mes */}
        <div className="days">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span>10</span>
          <span>11</span>
          <span>12</span>
          <span>13</span>
          <span>14</span>
          <span>15</span>
          <span>16</span>
          <span>17</span>
          <span>18</span>
          <span>19</span>
          <span>20</span>
          <span>21</span>
          <span>22</span>
          <span>23</span>
          <span>24</span>
          <span>25</span>
          <span>26</span>
          <span>27</span>
          <span>28</span>
          <span>29</span>
          <span>30</span>
          <span>31</span>
        </div>
      </div>
      <div className="events">
        <div className="event-popup">
          <div className="time-input">
            <div className="event-popup-time">Time</div>
            <input type="number" name="hours" min={0} max={24} className="hours"/>
            <input type="number" name="minutes" min={0} max={59} className="minutes"/>
          </div>
          <textarea placeholder="Enter Events Text (Naximun 60 Characters) "></textarea>
          <button className="event-popup-btn">Add Event</button>
          <button className="close-event-popup">
            <i className="bx bx-x"></i>
          </button>
        </div>
        <div className="event">
          <div className="event-date-wrapper">
            <div className="event-date">May 15, 2024</div>
            <div className="event-time">10:00</div>
          </div>
        <div className="event-text">Meeting With Jhon</div>
        <div className="events-buttons">
          <i className="bx bx-edit-alt"></i>
          <i className="bx bx-message-alt-x"></i>
        </div>
      </div>
        
      </div>
    </div>
  )
}

export default CalendarApp
