import React, { useState } from 'react';
import { Play, Film, ArrowRight } from 'lucide-react';

const videoCategories = [
  { id: 'all', name: 'Barchasi' },
  { id: 'goals', name: 'Gollar' },
  { id: 'interviews', name: 'Intervyular' },
  { id: 'training', name: 'Mashg\'ulotlar' },
  { id: 'documentary', name: 'Hujjatli filmlar' }
];

const videoItems = [
  {
    id: 1,
    title: 'Real Madrid vs Barcelona 3-1 | El Clásico Gollar',
    thumbnail: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXGBoYGBgXGBcYHhgYGB0XGBkXGhcYHSggGBolHxcXITIhJikrLi4uFx8zODMtNygtLi0BCgoKDg0OGxAQGzIlHyUrLS8tNS0tMi0vKy0tLy0tLS4vKy0tLS0tLi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgQHAAIDAQj/xABCEAACAQIDBQUFBQYEBwEBAAABAgMAEQQSIQUGMUFREyJhcZEygaGx8AcUQsHRI1JicuHxU4KSshUWJDNDosLSY//EABoBAAIDAQEAAAAAAAAAAAAAAAIDAAEEBQb/xAAxEQABBAEDAgQEBgIDAAAAAAABAAIDESEEEjFBUQUTFJEiMmFxFUKBodHwI7FSweH/2gAMAwEAAhEDEQA/AJGX5/X1/WvQl9Pr+vL4eNTMBKl8rIGuxIzmwtw1A1vx5044TZa2EkbAg6lVAX0I1ruajxaOJ5YASQu1JPsNUkFYG17psOOh05C/qPh1rZV+vr618aa9r7NxKjPh8RI6a5o3s5H+oXZfiKUm2rICMyQvbqhQnwuhHWgZ4y13zN9spHraPxNUqKO50BPqf78fq9HsJi0v2buqyAaqSPQnhm/hvfjprS6NpykFQUhVuPZBgxHG2ckkDyrkoUDKOHSs2o8R34YPdJl1m75Qmza2ye2jNvbXUfofPX6tSnBgpCbCNvQi3mToP7+FcmKgEDTrbS/nate3ze2zNbgGZmA8gTVw+KPjaW1ajNa5oqkUxGyWjTtJXjjXgS7gfL8tePhQZNuYUsV/b6fi7JcreI7+YDzF6kGFGF8o4W93SgOITLMKW7xOd3Br9P5QO1kp60maDaGFGl5nJGgWMJY/zMfy+VTcMIjYtHIPDOh/KhEkFwCKmLe3Gr9XM7O5Y366bcQSp52nCpULhtdQ2ZifLL/bkKk4t4Cqt/2WPEd4re3W2nhbjYUsvIQ4NEZsYCBagbNKDe4oG6yVp3WmHYjrfuSBgeIPcZTxBCtqRy9w8aOqRYcCDfXS3x48Pl40sbHALqxUEjrTvspEZM2UXvrpQyTuJsp7dU9/KQ8bu64myxjuNqrX0A6e75W6mpL7qsOEi+Fwfj9fOnxsEh/CB4jSuMmzowLm4A1JLHgOt+VOPiU2MrQdXKkOTd+VdSY+ntW/3AX+utbw7Fc6Erbwu3wAvzPx617tzfrCYc2hi7Zh+JjYadLi5+FBo/tXlzX7KLL0sfnegPicp7eyL1UtdEwjd4kXzEjqqE/p1+dTsLuwed/eQvw1PX19AMP2rjS8HmFYcPAEcffrR3A/aNhJLE51B5kXsehA19/Clu10p/MlmeU9VLXdywvl92b48PP1rDsgqLqGBGvh+tH8Li0kXNG4YeBv/au9D6iQ9UHnSd1Wm0cBiRjTiosmhU2LZbgKqspzAaGx9R0FGtv4RMQEZO7ILC1tSp5adDw5fCm8oDxAr21NdrZCWnALRQ+31RHUPJB7JGwe6zMtyT7hbytfj/bpU7DbpfvNYeOvytb15U2VlC7WTO/MqOokPVL53XTr8MvTodOFQsTu6w1UG3h3vnr09KbaygGolH5lQmeOqRo9nm9tb8wFYkW8wLf08akDBqBfP4DT5/XXqaca5PhkPFR6dKI6qQ9UR1Eh6pKxkJMbhSLlWA1GpINuP5+PU0vbN3ZJP7SRQOQU3v7yLfP41acmCja90U346DWughUaZR6U5niEzGlrcWiGrkAoJZwyhIewJzrYgA945TwXTU2rRN3WNsqKFNvavm58R76Z4MMiXyqBfjau1ZvOfnPKT5ju6Uo925FIuEfjwuo94JPjQplszAjLZiOvA2uOnlVhUl4xf2j6t7bcPPn4/wBK16WVznHcbWnTvc4mykHFyZXHl9fXlR/dzeBoyFJ7ppU27IVdf5fzP15VChxpvXG8SJGreR3/AOgtb6JIKvXDyrIMyGzUq717vjWeNbc5FH+8eHUe/rQLd/eAowudKsPCbUjkAuRc8+vgaXFKD91jliIVW/d9a6fd6bdubqG5eDhxKf8A5PMeHzpXOHcEgggjiDpatNrLVKMMMBWrQrXV4mvatfu9WqWRsBoKDbX9sHxo2mHtQ3b0dherURGM3iBFbQT92vNk96KtI1FyKfHwsk4p1rliBmNSoMLaxrg6C4tRN1sgq3YKFmQVMweKsQBTlurJ3GB4lr0iYNBxvTxuhYxsfG3zqnAUmRE7kWmxRDWAuOZvVU/aVvyXdsNhz3VOV2H4m5jyH1yp539x7YfCyyp7ZARD0ZjYH3cfdVPbC2AzgsQSb3JPj+dZJX1hbY22hMOz2kN2vr50Sh2GNdL+tNabOSJLtYX4XIHDxPGtxIo6eoPH648KyumN0tQhxaWIdgeBI+vjTJgN3sOVBNw1rMOIN+djWkuIKnS1YuKb60oHSo2R5RXY+7uKgkD4fEI1iWEUl1DC1st9bX6+Ap82dtlJFuVZGBKsjDVGFrqfUHxBB50l7D2oQQjnTkf3accVAWjzqLvztbvcBfzsBWqF+4WFmnZtKKqb61qZRe19aGYXD4gAXZQPMkj4V2TDHiSafaQiFZUURyW0YeGlQoZ5ySezOmnIel6u1SKSSqvtEDzrYG/CoDQu5Gaw8OlTYUsLVAVFvWVznksL17EdL1ai3rK44pbi3I8bUIxWIEJ4nXkTeqJpRHayoWBxglXTy0rIiytqWZepqWoptJ+MX9o/te0eBtz5/XC1Mc+0kU2NwaAYhczMct9Tztx19/H41q0polaNOclJLYaOQMkgvcAqQNVPe1B6eFKu0MC0RsdQeB6/ofCrJ3fyd/N0X/6rli8DFMHV/ZbS/MHkR4is/iMQfM49UckhbKeyriCYijOC20VsL0M2ps+TDkq4ut9HHsnpryPgagQtc1xy0jBWhrr4Vn7P3vbKATfzorHtfD4jSVBf94aH1qq8OWXyqXHiyDe9W2VzeCo6NjuQn/F7r5u9BIGH7rWB9x4H4UCxOz3Q964I4g1rsrbzLzprh2hDilCSjXkw0I8j+Vao9QDgrNJpiMtSyMLpehW2sGShJpp2lsyWO5QGSMH2lFyP5gOGhBvw1oFj8YGS1asLJRUHdp7qR4Vk0ZVzWm79la3jXu8U5UgijbygkAIXip3xU3aclkoTsjE52qRvFIeAozdpQraV1wWK8adN0do5AR1NV1sjAyM16c9hYUhu9cUbq2pbLDrR/e89tAFI0EisfIZv6UmzbSYDIgygdOZ6k0+TwKYz4C/pr+VV/tBrGw48TXM1OF1tNkFcZ3Q9tLOTwCoRqVHLKOpt8a4YdA0YKqwCaXJBIJ72VrcyCDbleu7khQbKwvqG8+vIjlWLilXNGAwDd8g62I0Jzc7gDytXPIIXWcQ4WOFvhiHNibctandkByuPCkbaG2yPZ4A6U0bLxweNX5EC4pr2kAErNE4EkLhtTa5RrIyxnl3CxPupl+zjfSaeT7vKFcZSySrpfLyIPOswOEhmujNlYg5D48x8aHbq7E7B2jz9n+APxy94X1B4kBlvyvenRPLQCEmVm4kdgrWgxIYXF68xMhCkgEnwFVztjfjE9s0WHgLWJAJ7vA24efW1Yu8+1lW5wgbxVlPwvWnzwsohcRad9jbQZls4IYHnoaIJilJtfXpQDdzbseNDHI0U0dg8bgqQDqDY8VOuvhRNcGM2bnTmusWEogg0UQziuf3lb2vQ2dnL2A7tQ5MC/aBxfyq1SMzYlQwudOXnUkOOtCsTg+0AvpbWuWNkdbAAm/HyqKInisQoFri5ryFU0JAv40vYjDSZwwvbnRQqXS3A1SiKKo4gDWtiwFBWmaJBe55VExskhIKk25irUR1oI3F2UHzoHNEMzaJYE2ubWHh4VOhe65edQiLc194v6fXG9PgOSnQnJSHjcV2ZOpFwPm3153qENtnhW32gYNosQEFyCt18RdviOB8r86We8OVXqG75C4dUnUTt8w5TVHtQWIuNeINjfwIPGl/E4JGa8Ojf4Y5+Kfp6dKjCdq9jL5gRoRqKzv0+8UUtmqDTYW8GMtoRUt1DC4rzFYIyDPwm4kf4nl0f5+fGDhpyK5ckTo3UV1Ip2yNtpUkMVohgdpEHjrUVVJ1rnNHbUUtOGFaO5G1i4lBN7FD6hh/8j0rptvc6LEM0kb9m51IAupPM24gnnb0pY+z+U5Jm/iUegJ/+qdYMdlI9fdz+vCulB8gtc6bLykRN0sXBISVEi9Yzm/8AU2b4UN3thIW9rEW0q4JpBxHnUTEiKZcksayL0cA+l+Hup95SC2xSprdlbsTRTE4cvJ4CnNtyYVJbDEoeORiSvuY6j33obBst0JDqVbx/I8x4irLuqAMxRXPZoVeQor96TwFbbG2be5Kk+40Vj2Yh5Chso9oQnP8AxG3S/KlqVblmPWnXaWBSOJn0HIeZ0/Ok7ErYEcyaxap2Ra36NtAqJiI7o6gcQB8aXNoxNFhZGc2b2VueRPD66U1yDukcB86QN8No69mR3Qb+/wAPU1njG54C1SO2MJSpLI3AsaZN2NrFDlbgdKVppwdQLV3wM2tjpwroOZubRXOa+nWFdmAYCMyKe8Bw69KBS7xQKyq0zBye9de6DzueVBk3m7KIIgLMRapu6GA7fFhplVhlJKHXk1rrfy41ibF/yW/zaGMlN+P2sipHMkZlaRTmyWFypy3LHqLH1rbZG+iFgkkDJfS+YNQbbmz8QwIjKxACy2FyPJRoBUTYOwpjIC7EgWuSLXPPjVB1ZCYYwcH/AMVqYfa2EDLeSNXOisxCkg8teVTMfiGQi3Ai4qtN+tkgxLNCqu0QyyR8ypOjj3mx8xRPZm0iuCgLK0ZUslmvw0Itm5VrjkPBXPmiAFgpyTFaX0rquJPSk9dsX/EK2fb5XTSn2s1JrOPI5V796vxFKEW2rm9xXf8A4tfmPWpaiZ1xfhXq40A8DSuu28vGvTtb8VtKlqUmebEg8QayPErwqBj8YOzDjw+NBo9shD3jUtRNBxSg/wBKhSS6nvAXJPC/9v6UPwm0e0cWGnGifWxYfyi/r48vdT4DkpsWCUv7wwR4qaGT8JiHu7z3B8Rw91ef8sREcB6UIgV7906AD3at8KmR7SlXQ61JyY5CwHASptOwSHC6QbtRhuA9KJvuvE1u7UKPaRonh9s9aSJD3QeU3stDuvHbgKT9592CM00QuV9tRzH74/P161YUW01POoizDtLiglAkFFHH/jNtVSQ4kjSvZcRTHvxsJISJ4tEY95eStxuPA66cqDbG2U2IdQAezv325BeYB5seFq5xjIdtXQbIC3cm7cfAlMOWaw7Vy4HPLZVU++xPkRRktqPD861xLLy0HADp4Chcm1oYs3bTRx2t7bquh8zW9o2gALC5242mSGY5R/D3T5cRWXsb0mx/aLs1TY4oWI1skp525LTfG+ZQR0uPKjVKdh5bGpq4i9wbGheHa9SlkCi5NWCopjueN9K0IHHhUF9podNffW/3sNzqWoiGIRSuUgFSLEHmKQ9ubFMDdot2h9Sng3UdD6+LgJDawOlaNNxDDQ6EHW4pUsYkGUyKV0Zwq8kkzC/LlVbb04bPI5HFbelXFtrd6wL4cXXiY+Y/k6jw49L8q3x8AzMxFwdDWFoMT/iW1xbKz4VXeaxrrhRc8K12jh8jkcr6eVe4WUDXnyrpci1z+CmnYyISVYE3Gutjbqp5EVaW7uwIMJEXi7zMB+0biwOosPwixqrt0NndrKjse6CLg9NdPh8KtvEy2UKOAFtPkKxyYNLoQmwtExpvYgEUP208zxsYn7P8II4i/NRbU1IwwFmNJ+8u9Bw2VCudmu1gcoVL2GtjqSD6GktaScLU9zW5Rbd3CYgMvtMseYzCQEmSKxzAMeevD9Kdd7MLGMHE0XsK4IBPAMDVcbu7yo0kckatC+cBkL9ositoRqAeF/CrA3tATBQxrwLgj+UKxHzFaIrDqKxakhzQQleEiuU5ua9gFhXBuNaQsK9KCu2HS1R7VIGgqKLSY3NH9hoJImQ8Rp7jS0aK7tYnJMAeDafpVqJnSInClDxUEenCkbEXY8TVjrHbMOtV7PCROU/jt6mrVJ02JhMqA/wgUXiFwDZjoOH5/XC1R5v2cJPh8hXbZozRRnKTdF525CmxGimR8qBuvhFeOa6gnu29GtY9P1otFu7GVGa+a2trVH3OWwk/y/8A1r7+NMdHqqMziinP+Qpcn3WB9l/UfpQ6bduZeADeR/WnSh20tu4XDgGfEQxA8M8irfyudaz7QlWlGTAyp7SN6H51rG9jrXban2u7JhBtiDKRfuxIzXtyDEBfjVV75/bNiMQ9sGggita7pG7sTxJLAhQOQGul78hW1S1bLMrrZsrDowH50F2hvRg4O6+JiFh7IYEgdMq3r59xu3cVKpWTESup4qzsQfMXseFR9n4GSaQRxKWdr2UW1sLnj4CoQALJU5Vh7z/amzh48IhQXsJmOpHVUt3SepJ05A8K2mmZ2LOxZjqWYkknqSeNO2z/ALMMXI3ZsUilCdoY5LgiO4Ga9rE3PAGjGC+zrDdztHlJ0zEFVBP7PguUkC8gX2vwtrpWaXWww8n9loZpJX8D6qrwa+ot1tq/esJBiLrd41z5eAcaOADwswIr5kx8YWWRVBADsADqQASAD41df2JTk4BgT7M7gacisbfMmtV2LWdWRHIF1NdIZlJ1axqKBevWw6txH19GhURMxDoDQfa+08JAWEsyRuqdoUvdsgvd+zHeKix1A5HpXVFlj1Rsw/dPH+tLm0d3oplKo7Qkk3Vszp3gVcZcwK3BNzqePU1aiJ7F3kgnkaOFyzKqyWKsAUcAq65hqNRfpfWmTDyq+hqq49nS4CePFHDSMI8yj7s2dTHIbdmQyk6M7MBdbacgFFk9opP7p6ioopjYa3ClHfTdftVaSFQJua6ASeugfx58+oP4tZ/aSQkdBbTxHO1csNBI6k37/PNfgeFj7jQPaHCiia4tNhfPW1d3sUzn/p3BU5WuLa+Fzr5jShWN2ZLCQkqMjcbMOI6ir725s/ER5XZwxLWC2uotr5k6da6bQ2VHikEmLwiOVFgys6GxsPw0TRQpRxs2k37IcEGYtIAUW1gdO9rYW58b/wB6snGYbDyEpbI/Irpx4XXgaH7rbO7OR4AmWAi6rfOyseaykA2/hIOt9TRramybWYcQbXHw/Me+icxtZCge4HBQbEbuTqpyAP0KsOfg1qV96d2EnQRyq0Ui+w5XUdQR+JfD0q0opCIwfrxH11rZ5FYZJFDKRwIB+BpHkAZaVoGqPDxapHdHcB0xoMjq8aKWUrcXbkCDVhb6yqXjiU/9tbEchfLb32FNOF2Th0tkS2v7zH5n4UnYzZzMTMWzB2Y5hwJuQR4WIIt4VYa4ZKCSRrqDUEeLSopio99wJrSbZZq7SqQWOPWusqVPj2eRXr7PY1dqUhJjrrh1IN+lTW2a9e/dCBVWpSc9nydpGrDmKV8Xgv8Ark6Eg+lGt08wBRuRuPI1KxeC/wCpRul6ZyEC471y5YLdRb1ojsTK0ERFiMgHHmBYj1oFvixYqo86WcHtueAFEZQMxNiL6njboNPW9bdHpnTlwachaIITJdLtL9q+AwaS5GOIlIXKqXCk68ZCLAa62vreuUn2lYrFQqIIWwiyd2OU2mkd9dI4yoULewLseB01Nx8+1dv2dxy4uGNREkWihSzXziNFjzquhGq+PA6GxIwauZ/zAZKpha95L0sbfxG1Rhmf7/PJE4zujF0cKCENwCRlBIuFa3Praua+hN7N1C8RiXFG7e0YspsAMuV7Bbqb6i+vwNG7c2NJhZTHLbqrDgy8Mw9CLcQQaXp5i62v+bshlDLtl19f6EOtWAVaX2dbsbIxKQjES4iTFSEqYI1YhO9lDsUQlVsVOYsAL61F2v8AZzHFjcRE+Mhw0ERUo2JNndJBmBRAB2liHW4I1Q1s2hLpJY3dxXYNiPu8ohUAmQowSzEKLMRZrkjhfjULAyOsiNHfOGBW3HNfT41f24OP+/4DHbLMiyrBF2MEqqy9pGVdY3sxJuCg9RXz+WZGuLqym+lwVYfEEGqc3BCivzaOwkM0M0zS4hG0mWRyMpPsqjDUIpJ4nl41Dba+HWQ53yplzaNmZWzyHsyLE3797/wr0pNfFSYwCVGeW4BZAS5jYjvApxC3vY2tbxuKKbdCNDH+w+7hdC8oES8D3QTrJrroCeOnGuK7R7wxs77u+KG3F5skkk44/wBhdj1sjg2yar9t1H6cUb7V2Sr9o0OHMyz4cMFmzF76DOpFyBxF7gnzp0+wrG3ixEP7rq4/zgqf9gqtd49pLKypHcxxggMRYuzG7PbkDoAOijmTTN9jG0jHj+ytcTIV5aFO+D46BhYda6cbAxgaLocXzXS/0XIebd/Cvla2yGtK6IWHI28qtUF0jNazLGxCtbMeGtm93O1bqwOoqvPtMwxnnweRFlWJi0lniBylo7pd2ABKo3McuFG1jnYAV0eiezhnTVDcdOf6GuZnR9D3H+HvHKgWyJ8PEVaKWeIEkNh5HMyjx1Z+zt1RrdQeUuPerATAB5kifO0eSVljcOpsRx1F+eoNR8T2gEirUojlFopWQ9OnMHyNT4cd1X3ihhhkj9nvLzBHzFclnUmynIw/CdRr8RS1Edkkje1yLeIqS3ZsuW4tS27yD2kv4jUHyNc/vC8DdT40QKlJkwmGjS5BvURMYNLsMh7up1BNsoPT+vHlUTA4lVvfgedCpFyiWRzeNVyyrcAALdu1A/CSrFr/AIsoB60ElkilAaBtNka2Vh9fWlCsa5z5Rx0rvu/Kxw65jmIut/3gCQp8dLa+Bofip9WN9WJ16KOdEHbmgqjgonhptBrVM43f7EYbFTwqbxRYqcqmhH/dkuCLAlTc3GbytVsxYgW4gdB0/rXzfvZiFbHYsrwOIltre/fa5v4m599NiKB4Vhw/amLvngTvWy2DL2Ztr7IJYE62v76cN0d5YMVEzNGujZbqz9AeZuDrVQbQ2Rh4cAmIDmSSUJa9lCMxDEBVYkkBXBzeYFMm5bdnhI9dWLOf8xNvgBSdVKGx20ZtO00W5/xHFK2k2fBJ7LsvhofSpbbAT/EPoKQcPtUrwNMGA3p0yuAwNZWagH5gtD9OR8qL4zZMaLczW6XH6UKEUAPemv8Ayp+ZNeYuAyjNBICDxRzqPI0Mk2JJzYD3j51T5XX8IVshb1KO4fGYZDcSN/pH61Jk27hyb3bTwFK3/CmH4r1n/Czzag9RIOiPyI0cxOKwshzF3HuFJeMI7R8p0zNa45XNuFFWwoH4rmhMp7x1PE8BevQeASOfI++wWjTxtYTSoWr9xODljiD4cXWNTGkSgnM11RSV4OAgYhddRVBVc32cb7Yd1SHFyZGACtewEgAyowYmwYaXHE2Nr5iK5GpZZaSLA5vj9fp3PRckcEJg2FvMkbRNjIWCOMwePtWC905g6lbEWvcKSQFsdCaUftkhiMSSRkMBNZGBvdHDm4PMHs0PvPWnfeeHAmKVzjOzLLlWTKMxBuWV2cDMpJ4KQT48KpberbH3kxwQZ3iiBCkglpG0u9uIWwAA5Acr2AxsjLW7AAQ48Zx9/rgck9VVvDjuyKRL7NtqbPw7yS41sQGUL2QgZ1z6kurFCNNEOrAedafahvsNp4lZUjMccaZEDWLG5LFmtoOPDXh40Iwu6OKdM4QDorMAx934f81qlYDcHHSnSIKP3mdbX6d0k/Culsk52n2V7XdkH2ZtmfDljBNJEXXKxjYoStwbXU34gVBkckknUnUk8z1p1w+4JBtLKQRoyqtrHoGJ+a0zbN3fw8QOSNbnmwDt6tw91q1R+Hzv5FD6prYHlVZgtnyym0Ubv/KpNvM8B5mmbA7l4los0uYRg3yL3jqNW45BwHAk+FWVgNmtIQiIXIHdABNgOg/CKNw4XEJeFY7y2GVTbnY2JvYLa/lT/QRsI3us9uEfkAclVLhd2Iwv/YLm/GSQjToFjtb3k0xbFjlikVo44osqlQUijvY8sxUsfeTVjvuAzNmDrGCASti+VuYB0uKj/wDLKDBNiFZ2dVY5dAMyEqy8CeKkVobJoW1tA9rRDyRwgSbUxDaGVvdYfEC9TZMSnYt2xIGga3iQM3ja97UwbIwGGOBixbwkEojyA52sNO07o1Nu8bAcqL7vbSwWIMi4dBePLmzQtGRnuV0kUE8DSZNbEPkZgHphR0o6BVlPsl0YALnDWyMouHB4ZbcT4UUwm62KbhCw/msvwYg0U2x9oaRYhVkwsgjhmZXkzKSoAeMuEW9xr1vblTZtHETSwpLgpYiD3rlc4dP4CGAB870UviE7aBbRPdW6Z4qxSrrD4Sz5WHBrEeRsRQXZcind/EzOFYzSO5vY99pEjU+YIvTHi8S6dpPlzSKS4WxGaQnurYcLuQD0ueFqJYqVXEeExkEbPiS+ZImLJlis/aFiFbjk5XuV86x+JSbnNB7JU5shLUwfCLsuaOaUPMYYpo3ld0kV1S/cckKRwBW1r1MgnRcdtRzApkijjbOGYGRAmbIQbqGGWwYDpccz327BhZjhAs2U4ObuqwLZhCUDqSxBsLKM4vqedR8Ls+Xt9pTXSRcTDaJVYXuqFcrA2sTpwuOOtcsvaDRKUI31uAwiGxt7YnVWQyIpjMh7WNljAQXde1IyMVAJNjyNG9nbdwuI4OhObJoQwzfum2qnwNK2F2pLgtixSdjaRLIVlDKIy0hXM/PKL3vwNxral7azzLtSQvKshGGikZkXIujhAQLnQZzYkk2bjUeS1pIRRgOeGuwrWl2WnJsuttDpfp51FbZwD6Fi1rXF10PK4Oo8OFB9l47PmWIhHlOZ1a5jLDMWdFBBWRzlub2Nr2vxlbI3qeWdsOsLsIuyWRyUGQyrmXuE5ioGhYcDytrVMcyQWFUkbozTkySNlS3CwLG3vtSnNJmbKD5npbkPH5UZ2/jOzgkfnoo95ApMbbcMMZdyWbki6sT0sfZHifnRnsgR/Ei0Zs2QkFVP7pI9rXpx91UU+7f/AEsmLWW6CYxQqVJaYZsoYEHQnXSx9k05bT27jcTC6CIJnuoYHREbQ2GhZrc7jjyreGAtLhU7BxhcIMyp3CZJRorEXtYam9+JPWpZClJI27srEQPHgpHVtQyBCWCmQlQLkAjW5tw7xPOn6LDBFVRwUBR5AWFK88U4xz4vFROt2JUAZuWVBdeQUeoo1DtXtASkchC8Ta1ufOsmqJcQ0LXpgGtLip1qwYgg1xjeUmwhb/1/WuhV727F2PPLlsPMk2rP5b+yf5re6lx7VZRpcVKg2seJY3qTh90cVIqusQKsLjvpp4G5qSv2eYpuJiXzY/kpqCN/YqjK0dUMfbpvodK5YjbTGmWD7NZPxzIP5VZvnaieE+znDjWSSR/AWQfmfjRjTyHogOoaFXLY9z5UShBKg97gOH19aVamz93cLDYxwoCPxEZj/qa5qv8AaaXnm0J/aOONvxH694r0HgkRje4k9Am6aXeSqZwe5kje1Io8FDOfWwX/ANqL4P7Ni/8A5nsNSOyF8o1JH7Q/I1YMOHpo+zfFN2uMhY3yNE6cNFkS1vK6GtOo0sMLLAJ/VZXxMa21XGC+zYqRkw/aiwIexkDAjQ3Y5L+FqYV3Zliw3bkKIbK2jDUPazWXS2op/wB0N3WwYnUy51klMiCxGQEAZbkm/AdKgYqMHZEyFbiFZVyjmMM7WFvERj1oBrGsdTGirGayVQkAPwgIfsncdnUPI4S4uFC5jY9dRY+GtTV2DCmIXCszlZoJWJzBdY2iUrYC40lve/4TRTenBvicOvYXcGzhVkKdopGneBFxqDY6UHn2HFg8Vs+WIFc0skDi417WKRxwHHPGNaB2rleLL++Aq8xzskr3CbOzbSlilwoaBYVMczKxDNde6zHus1mPj3TRjZOEQ/e4gijLKUFlA7skccg4Dh+0I91Rtt7wSwbQwmHyx9hOGDMQ2YOA5ABva2i8RzNbvtmCDGTdrPEivFCy5nUXdWmV+J6dl8aQ98hq+wrKElx9klbGYxbRwTcAxlhbXmyXX4pTyottRrn2sIpQeKyMJT6GD0oVtDamzyLwp2kqMsqFIXbvKwPdkZcoJuRx4E8qi7flfFtBiMP2mGngZwplCEMr5cyuqObqco53HSmzF0z9wFWEbreb4UmTAY2XaLh5po8OtnTLcRsAVsmZCpzHUm5PA6WohuPEYsPNh7l2w+ImS7HVszdutzrqRKtzUSXam0+yvbBhxxyrM4I5kKWWx8LmguBnxAxDzHEOBK6vJHGqKrFUSPiQWGiLwIqeW+VvAAHb6KtpcOiad2duHH4aVmjEbK8sLIGz2ZdPasL8RypX3d2hHhtoymaRI0mwyNmdlUZonK2u1hez1umwI45TIhfvsZNJHyliLFjHfLmtpwrtsPER4lRIoBYaEEAlTzF+nOjENMdXGP0RbQAa4UPbKJh9opNKglwk3aFisbS5WKgr3VBvdr6250xbO3phusMGFkRORKxxIOJtlzZgSf4OdcNuzlI1vGXUuFcDiFIN2HiLA0OjjQNpIhHI51/XSrdskaDI7NUM9lMObblviNm/eC4kXuli0i8L3JIXTUDNY3v+EUM2Ri1fHYuRiAMMiwIpvdYxd3k15M1lv/8AxpowrK4uGBP7ykcR0toeNbzxLIpilAIcFTcAq6nQqQeo5Vz537nkhJfkpC2VsaG0zTPmllkd1IItGjO0gQa34uSfG3JRURNmY+NyIsjRFu7+0TRQo1NyCSWuLW0FTtt7vrG5yPYjgQeHrwNRkwmJCExSCWQf+N7xm3PXvZvMegrmua9xyAf9rYHMYPhsD9l2h2xiIAPvELRhu73sro3LLdSVN/3TrRXZmCwEzZkijikMTREL3AyMblbDunWx1F7jjS3DvK8RMcy6NoySKCp8DfQipWFjwkhvG5gY/hJvHf8AhJ1XyvbpS2ucw49inOYyXn3C4x7IxGFdYgsjhLBZMpF15EtwvTJsLDiTGjFK2WXszHOv+KLDs5P51IUHqLcLayocVKqBM4MiagE6Mp0tfppoeR8Dp0wWKjaRZLFZVNmBFjY8Qw6+POrYdj9w4PRBI3ezac1wVO3khzxrHzLA++xP5UJw2xlzWdVHjYGjuMYEi/O5/T4Vph8dA8zYbNeZEV2Fm0VtAc1rH3GugVzQof8Aywh1vf4URwuyIkGiAnqdfnXTOUNjwqSso9aiiXd69lCQI1rZdLj8NyCp/luAD4GljCw5XKykjEDKHFjklQ91ioOt1JB8LjrVizi4IPx1+HMUGOwojLHMblk0UGxy3IJGa2YgZQRcnhSizNj+n+/dGH4pc9n7CGUZ+Nhp0867vsUciSOgUAet6NKPrjXVVHNm+VGhtRcZjnw2HVgt+9ltYmwsTf4UIi3hkju3tZtSCCflTLi51hhZ2Byi1/xE3IHAedL8W8cGbXNz/Cf0oqQrk2+Mv+GP9LfrXI73TP3cuW/MKfzo5FvHhm4Mf9LfpUj/AIvBa9z/AKT+lWolp97pIgF0NhxIJPzpWxUpd2cgXZixuSPaN/TWndtqwM/PiPwn9KUdo2MshBWxdiL34Enh4fneut4Rh7vst+h+YqXFDW2wtox4XaTNKwVJsNa9ibvHILCwGps59KIyYXKdNVPA9f614uKjUEu4jsxXvnJcjpf2h5U2dwew3whc4ELnJtBsJtGbElZpcNPCuXICcsoIstnICXGY8q67N3jZpJYvu9oJpHbPJIAQHQAjIoa93DfiGje6tpNuQshVby3sLBGsRcX1aw4Xsetq7YDZSOM2qg8MzDTzABv61jDoK+PlJ3MrPKD7Iw2Mwg7GHFsIl0WOSNZMngjkg26A3FTWw8mIUCbEyyhZBIpGSPKyXAymJFIsSeZOnGis2zpjbK8RA0vzt5te/oKD7TAwoCyLkVySCuisx1J7tu950Jnj5DcqjKOayu+29m4YwKs92VWGVpWaUq7mwJaQkkEtzPDyqFg9nCFgFVUK6CwUenhxqZFhxMmkklvB2/Wob7qILkGozV7W7QFBMQKRCTEw3zGSNT+LvLbpob291Atm7yBEKyAyOD3cgOov+JmAFx1F70J2nscRNe4NMe6mwFkIkksY11y/vMeAPhzP9aWdW4gtpWX/AAqbPJJLgxOQYbESJlcFrKbAm6WAN+GunnQTEbXcklcinwXNf/VoPcKadtOHDxHQMjqPDUAH3aelVPO7KSrCzKbEeNYNTqJhQa6gm6ZzTYKYpttYjh2xA6IiD5gkGoAml1tLLY8QDl+VCY8UelSkxrDQkj4VhMsp5cVsAb0C7HBycQrN/M165Mkt7HCuf5Rp6g1qk85PdzHxuLH41PX77xHZ2/ilt8lND90bjjC74PFYhbZcNIAOWgt7udSMTvQyi0iun8ysvzFQg2OPBUYfwOD/ALgD6VLfHYxVsYm+FCAeQlkjqtcNA+LdjHMc1sxzDTloSOF+tjw99dsRPjIe4VBty6jwvW+7uNnWS/YlQbltLAgAnpUqbeZH7sijhfgQVPS5p+2PaC8G0uQvLvgIpAJduggriIwVPJl/Xn41BEOHNzGzJzynvD3X1FF9o4rCyGzZyOot+YofKcKhzIHv1N/y0pbq/LabHuPzUp2BxFlXKwcC91Jsy345T+6emvuorhdqRscri9tA3Bl6A9R0NKk2IjJzLHr1Bsb+XOtI8SzG+Ur40JtHi8p4x2z58YQcNi3gliUH96J9eEiWub6630y8K3lw+KTazqe0+6y4XjmYxiZSBZTf9m2XWwte5PWum4dxE7n/AMjafypp/uL0fjxxuSOIOo6r/Q/OulCSYxuXKmDfMO3hJW420pW2Y0+IxhGTMhaZVdUCsLNcAOzWa3eYj2dNNRG1d4sYIto4eOVyYY454pWiETtEwXte6AAtgxKtlBsL+NP8O7mEmgmgWMRpMxMkamyZiFBKgexfKp00uCbamocm68eHb7xI80loTA7EdsXiJGUFY0zXXhmsdCb30IalIVLvFPDOmCMkLOsTTyzOjKscCCyplEntkixYtYAg2PCpew95hiJpFRLRREKzMwzFmUEARgXy6izX1twoNjtgBsbHMjQ4uWKFIZ4pCEa4s0U2UggORY2IHUW5a4zZMv35MZkWK6BJwj5g7llVARYcB+K2thVFRWAMWx4AAeOp/QfGpWGmk5MP8y3+RFCYZNBU/CZr/XzqgrRBjmUrIgysLEqbjzINiPPW3WqWxe3SkhRl1UlT5g2Pyq84hwqkd68FfGTWWw7VvQG1FSgAXZdrk6gV3G2SNCT6mo+FwPAeFRNoaE2HCo5tZVtAKJPtQD31MRrgG4111F+P186V8JDm7xPuprw691dSNBwF+VdTw3DnfZbNHhxQ194sZIgVMsIvqwBzHpYm+X3W5VEhwQBzMSzc2Y5j6n60rKyuq/w6B5sg+61elj5RCFyGGpy6X62/Xl7xTOm8cSgd17DTgP1+rGsrKV+GafsfdV6SMrvhd64Vucjk9LL+vWo+8u8EOKjVMjCzBrkC1rHx8b+41lZU/DIB0PuqOjiUXB7UVFyhT8P1qXBizIDlJFuvz+uhrKykS+HwtaSB+6B2kjAUXGbGMntN9fWn963g2wmFTsGVyQ2a4AsQQtiDfhYVlZS9NoopH7XBDHpoyaK44rbyP+Fuo0FweY46ihO03jlGqAkcGOht5jiNb6+NZWVrd4TpjyD7p3oohxfuhEmyjfunTx01rt9wcrluPPU+/h76ysrM7wXS9j7pwjAUQ7ImHB1HQWP11FSsNs9wO9Kb+A0+Ne1lEPBtL2PuhMQKkQYSReEpPmPhxreXD4g8JB6n9PI15WUp3g2k7H3Kmyuqbt2HZYiHbMSxNgLAaDS3uPvqXLsyFzqg89PrmD5VlZWd+kjYdoWKWJu4lAcWcMjsjRNcaHur+tBNpYCB9YgUPQgZfS+nLh1rKyt7fDNO9gJHI7rQzSx0Chg2O38I9f08/SvDsSQ6ZwBfU3Og5kaanUH3isrKD8G0vY+6d5YCcsJjgiBEUhVAVfAAW9dD7xXc7XFwbG/PhY8jz6EetZWUX4bBdUfdI9LGvRtNQwdAwPMG2o6H4+lE4d4gDwYryva4999QP0rKyqPh8I4v3VHSxrritsQSjK8RYEq2VlB7ykMp48QV/wDWpRjw84vkbjrrbgdL6/ym/iK8rKzT6SNrbCTJp2NFhc8JBBIXEZcFGKML6gjX0P5WobPtaBGKGOQOpsTZSb/zAg9Nb8CKysoodHEZiw8UD/r+VI4GF5aeykYLe2NNGEhHLgSD0vfUcfSlfaBEkzuCQGdmFwNAx4HXxHqKysrX+HQjv7p/pI1wELXNm08uA+vka0k2eSpGlz9fp6isrKA6KL+lUdLGomH2K6nVltytf9PP0NHIorKB3tBbT6+hasrKKOBkWWo44mtOF//Z',
    duration: '4:32',
    views: '1.8M',
    category: 'goals',
    hasUzbekSubtitles: true
  },
  {
    id: 2,
    title: 'Bellingham bilan eksklyuziv intervyu',
    thumbnail: 'https://images.pexels.com/photos/47343/the-ball-stadion-football-the-pitch-47343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    duration: '10:15',
    views: '852K',
    category: 'interviews',
    hasUzbekSubtitles: true
  },
  {
    id: 3,
    title: 'UCL Final | Real Madrid vs Manchester City',
    thumbnail: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    duration: '8:44',
    views: '3.5M',
    category: 'goals',
    hasUzbekSubtitles: true
  },
  {
    id: 4,
    title: 'Santiago Bernabéuda mashg\'ulot kuni',
    thumbnail: 'https://images.pexels.com/photos/1667583/pexels-photo-1667583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    duration: '15:20',
    views: '456K',
    category: 'training',
    hasUzbekSubtitles: false
  },
  {
    id: 5,
    title: 'Real Madrid: The Untouchables | Hujjatli film',
    thumbnail: 'https://images.pexels.com/photos/140039/pexels-photo-140039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    duration: '42:18',
    views: '1.8M',
    category: 'documentary',
    hasUzbekSubtitles: true
  },
  {
    id: 6,
    title: 'Mbappé Real Madrid bilan ilk o\'yinida hat-trik urdi',
    thumbnail: 'https://images.pexels.com/photos/41257/pexels-photo-41257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    duration: '5:47',
    views: '2.1M',
    category: 'goals',
    hasUzbekSubtitles: true
  }
];

const Media: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const filteredVideos = videoItems.filter(
    (video) => activeCategory === 'all' || video.category === activeCategory
  );
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="bg-[#0B1560] text-white py-28">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Media</h1>
          <p className="text-gray-300 max-w-2xl">
            Real Madrid videolari, gollar, intervyular va hujjatli filmlar o'zbek tilida
          </p>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {videoCategories.map((category) => (
            <button 
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-[#0B1560] text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Featured Video */}
        {activeCategory === 'all' && (
          <div className="mb-12 relative rounded-xl overflow-hidden shadow-lg group">
            <div className="relative h-[60vh] w-full">
              <img 
                src="https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Featured Video" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white/90 rounded-full p-5 transform transition-transform duration-300 group-hover:scale-110">
                  <Play className="h-10 w-10 text-[#0B1560] fill-current" />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center mb-2">
                  <span className="bg-[#FFB700] text-[#0B1560] text-sm font-semibold px-2 py-1 rounded-md mr-2">
                    Hujjatli film
                  </span>
                  <span className="text-white text-sm">1 soat 20 daqiqa</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">Real Madrid: Kings of Europe</h2>
                <p className="text-gray-300 max-w-2xl">
                  Real Madrid Champions League tarixidagi eng ko'p Chempionlar Ligasi g'alabalari haqida hujjatli film. 
                  O'zbek tilidagi subtitrlari bilan.
                </p>
              </div>
            </div>
          </div>
        )}
        
        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video) => (
            <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden group transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-white/90 rounded-full p-3 transform transition-transform scale-75 group-hover:scale-100">
                    <Play className="h-6 w-6 text-[#0B1560] fill-current" />
                  </button>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold leading-tight">{video.title}</h3>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">{video.views} ko'rilgan</span>
                  {video.hasUzbekSubtitles && (
                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                      O'zbek subtitrlar
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Documentary Section */}
        <section className="mt-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold flex items-center">
              <Film className="mr-2 h-6 w-6 text-[#0B1560]" />
              Hujjatli Filmlar
            </h2>
            <button className="text-[#0B1560] hover:text-[#FFB700] font-medium flex items-center transition-colors">
              Barchasi
              <ArrowRight className="ml-1 h-5 w-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/47343/the-ball-stadion-football-the-pitch-47343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Galácticos: The Team of Stars" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-white/90 rounded-full p-4 transform transition-transform scale-75 group-hover:scale-100">
                    <Play className="h-8 w-8 text-[#0B1560] fill-current" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Galácticos: The Team of Stars</h3>
                <p className="text-gray-600 mb-4">
                  Zinedine Zidane, Luis Figo, Ronaldo va David Beckham davrida 
                  Galácticos erasi haqidagi tarixiy hujjatli film.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">55 daqiqa • O'zbek subtitrlar</span>
                  <span className="text-[#0B1560] font-medium">Ko'rish</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="The Dynasty: 2014-2018" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-white/90 rounded-full p-4 transform transition-transform scale-75 group-hover:scale-100">
                    <Play className="h-8 w-8 text-[#0B1560] fill-current" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">The Dynasty: 2014-2018</h3>
                <p className="text-gray-600 mb-4">
                  Real Madrid ketma-ket to'rt Champions League finalini yutgan 
                  tarixiy 2014-2018 yillar davridagi g'alabalar haqida.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">70 daqiqa • O'zbek subtitrlar</span>
                  <span className="text-[#0B1560] font-medium">Ko'rish</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Media;